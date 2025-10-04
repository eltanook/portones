import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "/catalogo", label: "Catálogo" },
    { href: "/nosotros", label: "Sobre Nosotros" },
    { href: "/contacto", label: "Contacto" },
    { href: "tel:1165145507", label: "Llamar Ahora" },
  ]

  const services = [
    "Motores Corredizos",
    "Motores Batientes",
    "Controles Remotos",
    "Repuestos",
    "Mantenimiento",
    "Servicio Técnico",
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/portones.pm.9?locale=es_LA",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/automatizacion.pm?utm_source=ig_web_button_share_sheet&igsh=MXJ4MmNtZGJkOWo2dA==",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-portones-pm.png"
                alt="PORTONES PM"
                width={600}
                height={300}
                className="h-28 w-auto max-w-[340px] md:max-w-[420px] lg:max-w-[520px]"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Con más de 30 años de experiencia, somos tu opción confiable en automatización y reparación de portones.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:1165145507" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  (11) 6514-5507
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:caznidarsic@yahoo.com.ar"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  caznidarsic@yahoo.com.ar
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col gap-2 text-left">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} PORTONES PM. Todos los derechos reservados.
            </div>
            <div className="text-muted-foreground text-sm">
              Desarrollado y diseñado por Nexium Solutions Y Dietiero
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
