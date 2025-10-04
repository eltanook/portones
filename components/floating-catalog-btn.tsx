import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import React from "react";

const FloatingCatalogButton = () => {
  return (
    <Link href="/catalogo" legacyBehavior>
      <a className="fixed bottom-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105
                    md:px-6 md:py-3 md:text-base
                    sm:px-3 sm:py-3 sm:text-sm">
        {/* Texto visible solo en pantallas medianas y grandes */}
        <span className="hidden md:inline">Ver Productos</span>
        {/* Ícono visible en pantallas pequeñas */}
        <ShoppingBag className="w-6 h-6 md:hidden" />
      </a>
    </Link>
  );
};

export default FloatingCatalogButton;
