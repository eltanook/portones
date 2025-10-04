"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingCart,
  Star,
  Shield,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ScrollToTop } from "@/components/scroll-to-top";
import { getProductById, type Product } from "@/lib/products";
import { useCart } from "@/contexts/cart-context";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Componente de características del producto
function ProductFeatures({ product }: { product: Product }) {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Garantía",
      description: "3 años de garantía completa",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Instalación",
      description: "En el mismo día",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Soporte",
      description: "24/7 disponible",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
            {feature.icon}
          </div>
          <div className="text-sm font-medium text-foreground">
            {feature.title}
          </div>
          <div className="text-xs text-muted-foreground">
            {feature.description}
          </div>
        </div>
      ))}
    </div>
  );
}

// Componente de especificaciones técnicas
function TechnicalSpecs({ product }: { product: Product }) {
  const specs = [
    { label: "Material", value: "Acero galvanizado" },
    { label: "Voltaje", value: "220V / 110V" },
    { label: "Potencia", value: "800W - 1200W" },
    { label: "Peso máximo", value: "Hasta 800kg" },
    { label: "Velocidad", value: "12-15 m/min" },
    { label: "Temperatura", value: "-20°C a 60°C" },
  ];

  return (
    <div className="space-y-3">
      {specs.map((spec, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-border/50 last:border-b-0"
        >
          <span className="text-muted-foreground">{spec.label}:</span>
          <span className="font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const { itemCount, addItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariations, setSelectedVariations] = useState<
    Record<string, string>
  >({});
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const foundProduct = getProductById(params.id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Inicializar variaciones por defecto
      if (foundProduct.variations) {
        const defaultVariations: Record<string, string> = {};
        Object.entries(foundProduct.variations).forEach(([key, options]) => {
          defaultVariations[key] = options[0];
        });
        setSelectedVariations(defaultVariations);
      }
    }
  }, [params.id]);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity, selectedVariations);
      setIsCartOpen(true);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleVariationChange = (type: string, value: string) => {
    setSelectedVariations((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Producto no encontrado
            </h2>
            <p className="text-muted-foreground mb-4">
              El producto que buscas no existe.
            </p>
            <Button onClick={handleBack} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb y botón de retorno */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
            <nav className="text-sm text-muted-foreground">
              <span>Catálogo</span>
              <span className="mx-2">/</span>
              <span className="text-foreground font-medium">
                {product.name}
              </span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails si hay más imágenes */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={product.images[0]}
                      alt={`${product.name} vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (4.8) • 24 reseñas
                  </span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Precio */}
              <div className="py-4">
                <div className="text-3xl font-bold text-foreground">
                  ${product.price.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Precio incluye instalación básica
                </div>
              </div>

              {/* Variaciones */}
              {product.variations &&
                Object.entries(product.variations).map(([type, options]) => (
                  <div key={type} className="space-y-3">
                    <label className="text-sm font-medium text-foreground capitalize">
                      {type}:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleVariationChange(type, option)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            selectedVariations[type] === option
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

              {/* Cantidad */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">
                  Cantidad:
                </span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full h-12 text-base font-semibold"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-semibold"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
              </div>

              {/* Características destacadas */}
              <ProductFeatures product={product} />
            </div>
          </div>

          {/* Tabs con información adicional */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="specifications">
                  Especificaciones
                </TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Descripción Detallada
                    </h3>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p>
                        Este motor automático de alta calidad está diseñado para
                        brindar seguridad y comodidad en el acceso a tu hogar o
                        negocio. Fabricado con materiales de primera calidad y
                        tecnología de punta.
                      </p>
                      <p>
                        Incluye sistema de seguridad integrado con detección de
                        obstáculos, control remoto de largo alcance y función de
                        apertura manual en caso de corte de energía.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Especificaciones Técnicas
                    </h3>
                    <TechnicalSpecs product={product} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Reseñas de Clientes
                    </h3>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, index) => (
                        <div
                          key={index}
                          className="border-b border-border/50 pb-4 last:border-b-0"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < 5
                                      ? "text-yellow-400 fill-current"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">
                              Cliente {index + 1}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            Excelente producto, muy fácil instalación y funciona
                            perfectamente. Recomiendo totalmente el servicio.
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
