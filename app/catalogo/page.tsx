import type { Metadata } from "next"
import { CatalogoClient } from "./catalogo-client"

export const metadata: Metadata = {
  title: "Catálogo de Productos | Portones Automáticos y Motores | PORTONES PM",
  description: "🛒 Catálogo completo de portones automáticos, motores, repuestos y sistemas de control. +50 productos disponibles con 30+ años de garantía. ¡Envío gratis! ⚡",
  keywords: [
    "catálogo portones automáticos",
    "motores portones eléctricos", 
    "repuestos portones originales",
    "sistemas control acceso",
    "automatización residencial",
    "portones corredizos automáticos",
    "portones batientes eléctricos",
    "motores SEG PPA CAME",
    "controles remotos portones",
    "fotocélulas seguridad",
    "lámparas señalización",
    "racks cremalleras",
    "sensores movimiento",
    "tarjetas control",
    "transformadores portones",
    "PORTONES PM catálogo"
  ],
  openGraph: {
    title: "Catálogo de Productos - Portones Automáticos | PORTONES PM",
    description: "🛒 +50 productos para automatización de portones. Motores, repuestos, sistemas de control y más. 30 años de experiencia. ¡Consulta precios!",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/automatic-sliding-motor.png",
        width: 1200,
        height: 630,
        alt: "Catálogo de productos PORTONES PM - Motores y automatización"
      }
    ],
    siteName: "PORTONES PM"
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Productos - PORTONES PM",
    description: "🛒 Motores, repuestos y sistemas para portones automáticos. +30 años de experiencia.",
    images: ["/automatic-sliding-motor.png"]
  },
  alternates: {
    canonical: "https://portonespm.com/catalogo"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Catálogo de Productos",
}

export default function CatalogoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Catálogo de Productos - PORTONES PM",
    "description": "Catálogo completo de productos para automatización de portones, motores, repuestos y sistemas de control",
    "url": "https://portonespm.com/catalogo",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Productos de Automatización de Portones",
      "description": "Lista completa de productos disponibles",
      "numberOfItems": "50+",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Motor para Portón Corredizo Automático",
          "category": "Motores para Portones",
          "description": "Motor eléctrico para automatización de portones corredizos residenciales y comerciales",
          "brand": {
            "@type": "Brand",
            "name": "PORTONES PM"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "ARS",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "PORTONES PM"
            }
          }
        },
        {
          "@type": "Product", 
          "name": "Motor para Portón Batiente Automático",
          "category": "Motores para Portones",
          "description": "Motor eléctrico dual para automatización de portones batientes de doble hoja",
          "brand": {
            "@type": "Brand",
            "name": "PORTONES PM"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "ARS",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "PORTONES PM"
            }
          }
        },
        {
          "@type": "Product",
          "name": "Sistema de Control Central para Portones",
          "category": "Sistemas de Control",
          "description": "Sistema de control central para automatización residencial completa",
          "brand": {
            "@type": "Brand",
            "name": "PORTONES PM"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "ARS", 
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "PORTONES PM"
            }
          }
        },
        {
          "@type": "Product",
          "name": "Repuestos y Accesorios para Portones",
          "category": "Repuestos",
          "description": "Repuestos originales, controles remotos, fotocélulas y accesorios de seguridad",
          "brand": {
            "@type": "Brand", 
            "name": "PORTONES PM"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "ARS",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "PORTONES PM"
            }
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://portonespm.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Catálogo",
          "item": "https://portonespm.com/catalogo"
        }
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "PORTONES PM",
      "url": "https://portonespm.com",
      "logo": "https://portonespm.com/images/logo-portones-pm.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-11-XXXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CatalogoClient />
    </>
  )
}
