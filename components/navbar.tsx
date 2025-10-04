"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export function Navbar({ cartItemCount = 0, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para verificar si el link está activo
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background border-b border-border/50"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/logo-portones-pm.png"
                alt="PORTONES PM"
                width={400} // un poco más ancho
                height={200} // mantiene proporción
                className="h-44 mt-1.5 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-semibold text-lg group transition-all duration-300 ${
                    isActive
                      ? "text-accent"
                      : isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white hover:text-accent"
                  }`}
                  style={{ textShadow: "none", boxShadow: "none" }}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            <Button
              variant="outline"
              size="icon"
              onClick={onCartClick}
              className="relative h-9 w-9 border-border/50 hover:bg-accent hover:text-accent-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Carrito de compras</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-9 w-9 border-border/50 hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Menú</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg m-2 border border-border/50">
              {navItems.map((item) => {
                const isActive = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : isScrolled
                        ? "text-foreground hover:text-accent hover:bg-accent/10"
                        : "dark:text-white hover:text-accent hover:bg-accent/10"
                    }`}
                    style={{ textShadow: "none", boxShadow: "none" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
