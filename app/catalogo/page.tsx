import type { Metadata } from "next"
import { CatalogoClient } from "./catalogo-client"

export const metadata: Metadata = {
  title: "Catálogo - PORTONES PM | Automatización y Reparación",
  description: "Explora nuestro catálogo completo de productos para automatización de portones, motores, repuestos y sistemas de control. Más de 30 años de experiencia.",
  keywords: "catálogo portones, motores automáticos, repuestos portones, automatización, sistemas control",
  openGraph: {
    title: "Catálogo - PORTONES PM",
    description: "Productos de automatización de portones y sistemas de control",
    type: "website",
  },
}

export default function CatalogoPage() {
  return <CatalogoClient />
}
