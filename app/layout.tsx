import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/sonner";
import FloatingCatalogButton from "@/components/floating-catalog-btn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portonespm.com'),
  title: {
    default: "PORTONES PM - Automatización y Reparación de Portones | 30+ Años de Experiencia",
    template: "%s | PORTONES PM"
  },
  description: "✅ PORTONES PM: Líderes en automatización de portones con +30 años de experiencia. Motores, repuestos, reparación y mantenimiento. Automatizamos accesos, simplificamos tu vida. ¡Consulta gratis!",
  keywords: [
    "portones automáticos",
    "automatización portones",
    "motores portones",
    "repuestos portones", 
    "reparación portones",
    "mantenimiento portones",
    "seguridad residencial",
    "control accesos",
    "portones corredizos",
    "portones batientes",
    "PORTONES PM",
    "automatización Argentina"
  ],
  authors: [{ name: "PORTONES PM", url: "https://portonespm.com" }],
  creator: "Nexium Solutions",
  publisher: "PORTONES PM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "PORTONES PM - Automatización de Portones | Líderes en Argentina",
    description: "✅ Especialistas en portones automáticos con +30 años de experiencia. Motores, repuestos, reparación y mantenimiento. ¡Automatizamos tu acceso!",
    siteName: "PORTONES PM",
    images: [
      {
        url: "/images/logo-portones-pm.png",
        width: 1200,
        height: 630,
        alt: "PORTONES PM - Automatización de Portones"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTONES PM - Automatización de Portones",
    description: "Líderes en automatización de portones con +30 años de experiencia. Motores, repuestos y reparación.",
    images: ["/images/logo-portones-pm.png"],
  },
  alternates: {
    canonical: "https://portonespm.com"
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here"
  },
  category: "Automatización y Seguridad",
  classification: "Portones Automáticos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="AR" />
        <meta name="geo.country" content="Argentina" />
        
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PORTONES PM",
              "description": "Especialistas en automatización de portones con más de 30 años de experiencia. Motores, repuestos, reparación y mantenimiento.",
              "url": "https://portonespm.com",
              "logo": "https://portonespm.com/images/logo-portones-pm.png",
              "image": "https://portonespm.com/images/logo-portones-pm.png",
              "telephone": "+54-11-XXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressRegion": "Buenos Aires"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-34.6118",
                "longitude": "-58.3960"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-13:00",
              "priceRange": "$$",
              "servesCuisine": null,
              "serviceType": "Automatización de Portones",
              "areaServed": {
                "@type": "Country",
                "name": "Argentina"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Portones",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automatización de Portones",
                      "description": "Instalación y automatización de portones residenciales y comerciales"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reparación de Motores",
                      "description": "Reparación y mantenimiento de motores para portones automáticos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Repuestos para Portones",
                      "description": "Venta de repuestos originales para portones automáticos"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/portonespm",
                "https://www.instagram.com/portonespm",
                "https://wa.me/549XXXXXXXXX"
              ],
              "foundingDate": "1990",
              "slogan": "Automatizamos Accesos, Simplificamos tu Vida"
            })
          }}
        />

        <style>{`
          html {
            --font-sans: ${dmSans.style.fontFamily};
            --font-serif: ${dmSans.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="portones-theme"
        >
          <CartProvider>
            {children}
            <FloatingCatalogButton />
            <Toaster position="top-right" />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
