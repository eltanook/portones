import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function Location() {
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
      label: "Dirección",
      value: "Buenos Aires, Argentina",
      href: "#",
    },
    {
      icon: Clock,
      label: "Horarios",
      value: "Lun - Vie: 8:00 - 18:00\nSáb: 8:00 - 13:00",
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8160932545!2d-58.3815591!3d-34.6037181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación PORTONES PM"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
