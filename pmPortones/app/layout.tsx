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
  title: "PORTONES PM - Automatización y Reparación de Portones",
  description:
    "Con más de 30 años de experiencia, somos tu opción confiable en Automatización y reparación de motores y repuestos. Automatizamos Accesos, simplificamos tu vida.",
  generator: "v0.app",
  keywords:
    "portones, automatización, motores, repuestos, reparación, seguridad, accesos",
  authors: [{ name: "PORTONES PM" }],
  openGraph: {
    title: "PORTONES PM - Automatización y Reparación",
    description:
      "Automatizamos Accesos, simplificamos tu vida. Más de 30 años de experiencia.",
    type: "website",
    locale: "es_AR",
  },
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
