import type { Metadata } from "next"
import { NosotrosClient } from "./nosotros-client"

export const metadata: Metadata = {
  title: "Nosotros - PORTONES PM | Más de 30 años de experiencia",
  description: "Conoce nuestra historia, experiencia y compromiso con la automatización de portones. Más de 30 años brindando soluciones confiables en automatización y reparación.",
  keywords: "nosotros portones pm, experiencia automatización, historia empresa, equipo profesional",
  openGraph: {
    title: "Nosotros - PORTONES PM",
    description: "Más de 30 años de experiencia en automatización de portones",
    type: "website",
  },
}

export default function NosotrosPage() {
  return <NosotrosClient />
}
