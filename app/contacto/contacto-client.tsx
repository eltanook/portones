"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Location } from "@/components/location";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

// Componente funcional del formulario
function ContactFormFunctional() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/Info@portonespm.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo contacto desde PORTONES PM - ${formData.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente", {
          description: "Te contactaremos a la brevedad. ¡Gracias por tu consulta!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor intenta nuevamente o contáctanos por teléfono.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-border rounded-lg p-6 flex flex-col">
      <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nombre *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Asunto *
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            placeholder="¿En qué podemos ayudarte?"
            required
          />
        </div>
        
        <div className="flex-grow">
          <label className="block text-sm font-medium text-foreground mb-2">
            Mensaje *
          </label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none h-full min-h-[120px]"
            placeholder="Describe tu consulta o proyecto..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-3 px-4 rounded-md hover:bg-accent/90 transition-colors font-medium mt-4 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}

export function ContactoClient() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar cartItemCount={itemCount} onCartClick={handleCartClick} />

      {/* Header simple */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <Badge 
              variant="outline" 
              className="mb-6 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 transition-colors duration-200"
            >
              30+ años de experiencia
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Ponte en
              <span className="text-accent"> Contacto</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Solicita tu cotización personalizada o consulta cualquier duda. 
              Te respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal - Dos columnas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Columna izquierda - Información de contacto */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Información de contacto
                </h2>
                <p className="text-muted-foreground mb-6">
                  Utiliza cualquiera de estos medios para comunicarte con nosotros.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. 25 de Mayo 416 (Entre Hipólito Irigoyen y Av. Belgrano)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">
                      Fijo: 0348-4432218 | Cel: 011-65145507
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      Info@portonespm.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="font-semibold text-foreground mb-4">Horario de atención</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="text-foreground">8:30 - 12:30 y 14:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados</span>
                    <span className="text-foreground">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingos</span>
                    <span className="text-foreground">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario Funcional */}
            <ContactFormFunctional />

          </div>
        </div>
      </section>

      {/* Mapa */}
      <Location />

      <Footer />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFloat />
    </main>
  );
}
