"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-border/50 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Primer item abierto por defecto

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo toma la instalación?",
      answer:
        "La instalación típica de un motor para portón toma entre 2-4 horas, dependiendo del tipo de portón y las características del lugar. Para sistemas más complejos, puede tomar hasta un día completo.",
    },
    {
      question: "¿Qué garantía tienen los productos?",
      answer:
        "Todos nuestros productos cuentan con garantía del fabricante de 12 meses, y ofrecemos garantía extendida de hasta 3 años en instalación y mano de obra.",
    },
    {
      question: "¿Realizan mantenimiento preventivo?",
      answer:
        "Sí, ofrecemos planes de mantenimiento preventivo programado. Recomendamos un servicio cada 6 meses para asegurar el óptimo funcionamiento del sistema.",
    },
    {
      question: "¿Qué horarios de atención tienen?",
      answer:
        "Nuestro horario de atención es de Lunes a Viernes de 9:00 a 18:00 hs. También atendemos consultas por WhatsApp para coordinar visitas y presupuestos.",
    },
    {
      question: "¿Qué marcas de motores manejan?",
      answer:
        "Trabajamos con las mejores marcas del mercado: Peccinin, Seg, Came, BFT, y otras marcas reconocidas por su calidad y durabilidad en el tiempo.",
    },
    {
      question: "¿Hacen presupuestos sin cargo?",
      answer:
        "Sí, realizamos evaluaciones y presupuestos completamente gratuitos. Un técnico especializado visitará el lugar para hacer las mediciones y recomendaciones necesarias.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4 font-medium">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resolvemos tus Dudas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Contactar Especialista
          </button>
        </div>
      </div>
    </section>
  );
}
