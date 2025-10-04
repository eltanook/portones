"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5491165145507";
    const message =
      "¡Hola! Me interesa conocer más sobre sus productos de automatización de portones.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </Button>
  );
}
