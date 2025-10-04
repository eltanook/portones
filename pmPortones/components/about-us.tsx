import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Award, Wrench, Phone } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  const features = [
    {
      icon: Clock,
      title: "30+ Años de Experiencia",
      description:
        "Más de tres décadas brindando soluciones confiables en automatización de portones.",
    },
    {
      icon: Shield,
      title: "Confianza y Seguridad",
      description:
        "Productos y servicios que garantizan la máxima seguridad para tu hogar o empresa.",
    },
    {
      icon: Wrench,
      title: "Servicio Técnico Especializado",
      description:
        "Equipo técnico altamente capacitado para instalación, mantenimiento y reparaciones.",
    },
    
  ];

  return (
    <section id="nosotros" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="bg-accent/80 border-accent text-white px-4 py-2 text-base font-bold shadow-2xl backdrop-blur-sm rounded-full hover:bg-accent transition-all duration-300 ring-2 ring-accent/30 mb-4"
          >
            ✓ Sobre Nosotros
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            PORTONES PM: Tu Socio de Confianza en Automatización
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con más de 30 años de experiencia en el mercado, somos la empresa
            líder en automatización y reparación de portones en Argentina.
            Nuestra misión es simple: automatizar accesos y simplificar tu vida.
          </p>
        </div>

        {/* Nueva estructura de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Columna izquierda - Contenido */}
          <div className="flex flex-col justify-center h-full">
            {/* Nuestra Historia */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Nuestra Historia
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Desde 1993, PORTONES PM ha sido pionera en el desarrollo e
                  implementación de sistemas de automatización para portones
                  residenciales, comerciales e industriales.
                </p>
                <p>
                  Lo que comenzó como un pequeño taller familiar se ha convertido 
                  en una empresa de referencia en el sector, automatizando miles 
                  de accesos desde pequeñas residencias hasta grandes complejos 
                  industriales.
                </p>
                <p>
                  Hoy contamos con un equipo de técnicos especializados y 
                  utilizamos las mejores tecnologías del mercado para garantizar
                  la máxima calidad en cada instalación.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-accent font-semibold">30+ años de experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/sleek-automated-gate.png"
                  alt="PORTONES PM - Automatización de portones"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tecnología de Vanguardia
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Sistemas automatizados de última generación para máxima seguridad y comodidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Llamado a la acción intermedio */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <Badge
              variant="outline"
              className="bg-accent/80 border-accent text-white px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-sm rounded-full hover:bg-accent transition-all duration-300 ring-2 ring-accent/30 mb-4"
            >
              ✓ Confía en los Expertos
            </Badge>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              ¿Por qué elegir PORTONES PM?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
              Más de 30 años de experiencia nos respaldan. Conoce las razones por las que 
              miles de clientes confían en nosotros para automatizar sus accesos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/catalogo"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
              >
                <Award className="w-4 h-4 mr-2" />
                Ver Nuestros Productos
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-accent/30 text-accent rounded-lg font-semibold hover:bg-accent/5 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Información
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-accent/20 hover:border-accent/40"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

    
      </div>
    </section>
  );
}
