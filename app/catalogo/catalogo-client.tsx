"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Catalog } from "@/components/catalog";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";

export function CatalogoClient() {
  const { itemCount, addItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAddToCart = (
    product: Product,
    quantity = 1,
    variations?: Record<string, string>
  ) => {
    addItem(product, quantity, variations);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Header consistente con otras páginas */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <Badge 
              variant="outline" 
              className="mb-6 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 transition-colors duration-200"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Catálogo Premium
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Nuestros
              <span className="text-accent"> Productos</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de productos para automatización de portones y sistemas de acceso. 
              <span className="text-accent font-medium"> Calidad profesional garantizada.</span>
            </p>
          </div>
        </div>
      </section>

      <Catalog onAddToCart={handleAddToCart} />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
