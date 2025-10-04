"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroMessages = [
    {
      title: "Seguridad Total",
      subtitle: "Protege tu hogar con la mejor tecnología",
      cta: "Ver Productos"
    },
    {
      title: "Instalación Profesional",
      subtitle: "Técnicos especializados con garantía extendida",
      cta: "Solicita tu Cotización"
    },
    {
      title: "Mantenimiento Premium",
      subtitle: "Servicio técnico las 24 horas todos los días",
      cta: "Programa tu Servicio"
    },
    {
      title: "Tecnología Avanzada",
      subtitle: "Control remoto y automatización inteligente",
      cta: "Ver Innovaciones"
    }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Fondo con imagen */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.pexels.com/photos/10945455/pexels-photo-10945455.jpeg" 
          alt="Portón automático" 
          className="object-cover w-full h-full"
          style={{ backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative flex items-center justify-center">
        {/* Content with Carousel */}
        <div className="max-w-4xl space-y-12 text-center">
          {/* Enhanced Badge */}
          <Badge
            variant="outline"
            className="bg-accent/80 border-accent text-white px-4 py-2 text-base font-bold shadow-2xl backdrop-blur-sm rounded-full hover:bg-accent transition-all duration-300 ring-2 ring-accent/30"
          >
            ✓ 30+ años de experiencia
          </Badge>

          {/* Company Name */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-accent">
            PM Portones
          </h1>

          {/* Carousel de mensajes */}
          <div className="space-y-8 relative">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {heroMessages.map((message, index) => (
                  <CarouselItem key={index}>
                    <div className="space-y-6 p-8">
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        {message.title}
                      </h2>
                      <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
                        {message.subtitle}
                      </p>
                      <div className="flex justify-center pt-4">
                        <Link href={
                          message.cta === "Ver Productos" ? "/catalogo" :
                          message.cta === "Solicita tu Cotización" ? "/contacto" :
                          message.cta === "Programa tu Servicio" ? "/contacto" :
                          message.cta === "Ver Innovaciones" ? "/catalogo" :
                          "/"
                        }>
                          <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white transition-colors"
                          >
                            {message.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-60px] top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute right-[-60px] top-1/2 transform -translate-y-1/2" />
            </Carousel>
          </div>

         
        </div>
      </div>
    </section>
  );
}
