import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function Location() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "Fijo: 0348-4432218\nCel: 011-65145507",
      href: "tel:03484432218",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Info@portonespm.com",
      href: "mailto:Info@portonespm.com",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "Av. 25 de Mayo 416\n(Entre Hipólito Irigoyen y Av. Belgrano)",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horarios",
      value: "Lun - Vie: 8:30 - 12:30 y 14:00 - 17:30\nSáb - Dom: Cerrado",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/portones.pm.9?locale=es_LA",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/automatizacion.pm?utm_source=ig_web_button_share_sheet&igsh=MXJ4MmNtZGJkOWo2dA==",
      color: "text-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Solo el mapa centrado */}
        <div className="flex justify-center">
          <Card className="overflow-hidden h-96 w-full max-w-7xl shadow-xl border-accent/20">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5!2d-58.9!3d-34.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzQ4LjAiUyA1OMKwNTQnMDAuMCJX!5e0!3m2!1ses!2sar!4v1635959999999!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación PORTONES PM - Av. 25 de Mayo 416"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
