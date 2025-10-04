"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const services = [
    "Instalación de Motor Corredizo",
    "Instalación de Motor Batiente",
    "Reparación de Motor",
    "Mantenimiento Preventivo",
    "Cambio de Repuestos",
    "Consulta General",
    "Presupuesto",
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "(11) 6514-5507",
      href: "tel:1165145507",
    },
    {
      icon: Mail,
      label: "Email",
      value: "caznidarsic@yahoo.com.ar",
      href: "mailto:caznidarsic@yahoo.com.ar",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horarios de Atención",
      value: "Lun - Vie: 8:00 - 18:00\nSáb: 8:00 - 13:00",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/portones.pm.9?locale=es_LA",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/automatizacion.pm?utm_source=ig_web_button_share_sheet&igsh=MXJ4MmNtZGJkOWo2dA==",
      color: "text-pink-600 hover:text-pink-700",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/caznidarsic@yahoo.com.ar",
        {
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
        }
      );

      if (response.ok) {
        toast.success("Mensaje enviado correctamente", {
          description:
            "Te contactaremos a la brevedad. ¡Gracias por tu consulta!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          service: "",
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
    <section id="contacto" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            ¿Necesitas Ayuda? Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos
            a la brevedad con la mejor solución para tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form - Col-8 equivalent */}
          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Envíanos tu Consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu número de teléfono"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Servicio de Interés</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Asunto de tu consulta"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe tu consulta o necesidad..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Col-4 equivalent */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">
                        {info.label}
                      </h4>
                      {info.href && info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-all duration-200 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Service */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      Soporte Técnico
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Lun - Vie 9:00-18:00
                    </p>
                    <a
                      href="tel:1165145507"
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      Llamar Ahora
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">
                  Respuesta Rápida
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Respondemos todas las consultas en menos de 24 horas
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">
                    En línea ahora
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
