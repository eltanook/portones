"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";
import { Award, Users, Clock, Shield, Zap, TrendingUp } from "lucide-react";

export function NosotrosClient() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Hero Section - Diseño moderno con gradientes y animaciones */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-8 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 mb-8">
              <Badge 
                variant="outline" 
                className="bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 px-6 py-2 text-base font-medium shadow-lg backdrop-blur-sm"
              >
                <Award className="w-4 h-4 mr-2" />
                30+ años de experiencia
              </Badge>
            </div>

            {/* Título hero mejorado */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight leading-[0.9]">
              Tres Décadas de
              <br />
              <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Excelencia
              </span>
            </h1>

            {/* Subtítulo mejorado */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto font-light">
              Desde 1994, hemos sido pioneros en automatización de portones,
              <br className="hidden md:block" />
              combinando tradición artesanal con innovación tecnológica de vanguardia.
            </p>

            {/* Valores clave rediseñados */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-accent/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Calidad</h3>
                  <p className="text-sm text-muted-foreground">Productos duraderos y confiables</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-accent/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Experiencia</h3>
                  <p className="text-sm text-muted-foreground">30+ años en el mercado</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-accent/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Innovación</h3>
                  <p className="text-sm text-muted-foreground">Tecnología de vanguardia</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-accent/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Servicio</h3>
                  <p className="text-sm text-muted-foreground">Atención personalizada</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Diseño moderno */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra <span className="text-accent">Evolución</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un viaje de tres décadas hacia la excelencia en automatización
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Galería de imágenes */}
            <div className="space-y-6 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                <Image
                  src="/automatic-dual-swing-gate-motor.png"
                  alt="Motor automatizado para portón batiente"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                  <Image
                    src="/automatic-sliding-motor.png"
                    alt="Sistema de motor corredizo automatizado"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                  <Image
                    src="/central-control-portones.png"
                    alt="Central de control para portones"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                <Image
                  src="/residential-automation-system.png"
                  alt="Sistema de automatización residencial"
                  width={600}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            </div>

            {/* Timeline vertical mejorada */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">94</span>
                  </div>
                  <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-accent/30 -translate-x-1/2"></div>
                </div>
                <Card className="flex-1 p-6 bg-white dark:bg-gray-900 shadow-lg border-l-4 border-l-accent">
                  <h3 className="text-xl font-bold text-foreground mb-2">Fundación</h3>
                  <p className="text-muted-foreground">
                    Inicio como taller familiar especializado en reparación de motores, 
                    estableciendo las bases de lo que sería una empresa líder.
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">05</span>
                  </div>
                  <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-accent/30 -translate-x-1/2"></div>
                </div>
                <Card className="flex-1 p-6 bg-white dark:bg-gray-900 shadow-lg border-l-4 border-l-accent">
                  <h3 className="text-xl font-bold text-foreground mb-2">Expansión</h3>
                  <p className="text-muted-foreground">
                    Incorporación de sistemas automatizados y nuevas tecnologías, 
                    marcando el inicio de nuestra era de innovación.
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">15</span>
                  </div>
                  <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-accent/30 -translate-x-1/2"></div>
                </div>
                <Card className="flex-1 p-6 bg-white dark:bg-gray-900 shadow-lg border-l-4 border-l-accent">
                  <h3 className="text-xl font-bold text-foreground mb-2">Modernización</h3>
                  <p className="text-muted-foreground">
                    Adopción de sistemas inteligentes y control remoto, 
                    revolucionando la experiencia del usuario.
                  </p>
                </Card>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg ring-4 ring-accent/20">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 p-6 bg-white dark:bg-gray-900 shadow-lg border-l-4 border-l-accent">
                  <h3 className="text-xl font-bold text-foreground mb-2">Presente</h3>
                  <p className="text-muted-foreground">
                    Líderes en automatización con soluciones IoT y domótica, 
                    definiendo el futuro de la seguridad residencial.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas premium */}
      <section className="py-20 bg-gradient-to-r from-accent/5 via-background to-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Números Hablan
            </h2>
            <p className="text-muted-foreground text-lg">Tres décadas de resultados comprobados</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-accent mb-2 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                30+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Años de Experiencia
              </div>
            </Card>
            
            <Card className="p-8 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-accent mb-2 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                5K+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Proyectos Completados
              </div>
            </Card>
            
            <Card className="p-8 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-accent mb-2 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Satisfacción Cliente
              </div>
            </Card>
            
            <Card className="p-8 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-accent mb-2 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Soporte Técnico
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
