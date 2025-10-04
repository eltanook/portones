"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Eye } from "lucide-react"
import { type Product, formatPrice } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  viewMode?: 'grid' | 'list'
}

export function ProductCard({ product, onAddToCart, viewMode = 'grid' }: ProductCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex min-h-[160px] sm:min-h-[200px]">
        {/* Imagen del producto */}
        <div className="relative w-1/3 sm:w-48 bg-card flex items-center justify-center flex-shrink-0">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="200px"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            priority={typeof product.featured === "boolean" ? product.featured : undefined}
          />
          
          {/* Overlay sutil en hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Badges eliminados */}

          {/* Quick actions */}
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`/producto/${product.id}`}>
              <Button size="sm" className="h-8 w-8 p-0 bg-orange-500 text-white hover:bg-orange-600 shadow-lg">
                <Eye className="h-3 w-3" />
              </Button>
            </Link>
            <Button 
              size="sm" 
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="h-8 w-8 p-0 bg-orange-500 text-white hover:bg-orange-600 shadow-lg disabled:bg-muted disabled:text-muted-foreground"
            >
              <ShoppingCart className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Contenido del producto */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-200 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
            </div>
            
            <Button 
              onClick={() => onAddToCart(product)}
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-md"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col min-w-0">
      {/* Imagen del producto */}
      <div className="relative w-full h-48 sm:h-56 bg-card flex items-center justify-center flex-shrink-0">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority={typeof product.featured === "boolean" ? product.featured : undefined}
        />
        
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Badge solo para Sin Stock */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {!product.inStock && (
            <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground">
              Sin Stock
            </Badge>
          )}
        </div>
        
        {/* Quick actions - aparece en hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            asChild
            className="h-10 w-10 p-0 bg-orange-500 text-white hover:bg-orange-600 shadow-lg border border-orange-500"
          >
            <Link href={`/producto/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="h-10 w-10 p-0 bg-orange-500 text-white hover:bg-orange-600 shadow-lg border border-orange-500 disabled:bg-muted disabled:text-muted-foreground disabled:border-muted"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Contenido - Flex para distribuir el espacio */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Categoría y estado */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
            {product.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {product.inStock ? 'Disponible' : 'Agotado'}
          </span>
        </div>
        
        {/* Título */}
        <h3 className="font-semibold text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-foreground/80 transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Descripción */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 my-2">
          {product.description}
        </p>
        
        {/* Espaciador flexible para empujar el precio y el botón hacia abajo */}
        <div className="flex-1"></div>
        
        {/* Precio */}
        <div className="text-xl sm:text-2xl font-semibold text-accent mt-auto">
          {formatPrice(product.price)}
        </div>
        
        {/* Botón */}
        <div className="flex-shrink-0 mt-4">
          <Button 
            onClick={() => onAddToCart(product)} 
            disabled={!product.inStock} 
            className="w-full h-9 text-sm sm:h-10 sm:text-base bg-orange-500 text-white hover:bg-orange-600 disabled:bg-muted disabled:text-muted-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Agregar al carrito' : 'No disponible'}
          </Button>
        </div>
      </div>
    </div>
  )
}