import type { Metadata } from "next"
import { ContactoClient } from "./contacto-client"

export const metadata: Metadata = {
  title: "Contacto - PORTONES PM | Solicita tu cotización",
  description: "Ponte en contacto con nosotros para solicitar información, cotizaciones o soporte técnico. Estamos aquí para ayudarte con todas tus necesidades de automatización.",
  keywords: "contacto portones pm, cotización automatización, soporte técnico, información portones",
  openGraph: {
    title: "Contacto - PORTONES PM",
    description: "Solicita información y cotizaciones para automatización de portones",
    type: "website",
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
