"use client"

import React, { useRef } from "react"
import { Badge } from "@/components/ui/badge"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="group flex min-h-[250px] flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
      {/* Rating */}
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 transition-colors ${
              i < rating
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-700"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
        "{content}"
      </p>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
          {name}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  )
}

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Propietario de Casa",
      content:
        "Excelente servicio y productos de calidad. Mi portón automático lleva 5 años funcionando perfectamente.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Administradora de Consorcio",
      content:
        "Profesionales confiables. Instalaron sistemas en todo nuestro edificio con garantía completa.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      role: "Empresa de Seguridad",
      content:
        "Los recomendamos a todos nuestros clientes. Calidad y servicio técnico excepcional.",
      rating: 5,
    },
    {
      name: "Lucía Gómez",
      role: "Dueña de PH",
      content:
        "La atención fue excelente y el equipo muy amable. El portón funciona perfecto y el precio fue justo.",
      rating: 5,
    },
    {
      name: "Federico Torres",
      role: "Constructor",
      content:
        "Siempre los elijo para mis obras. Cumplen con los plazos y la calidad es superior.",
      rating: 4,
    },
    {
      name: "María López",
      role: "Cliente Particular",
      content:
        "Me asesoraron muy bien y resolvieron todas mis dudas. Recomendados!",
      rating: 5,
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.querySelector("div")?.clientWidth ?? 0
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400"
          >
            ✓ Testimonios
          </Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Lo que nuestros clientes dicen
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 hidden -translate-y-1/2 transform rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-md transition-all hover:border-blue-300 hover:bg-gray-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-400 lg:inline-flex"
            aria-label="Anterior"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-center sm:w-1/2 lg:w-1/3"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 hidden -translate-y-1/2 transform rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-md transition-all hover:border-blue-300 hover:bg-gray-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-400 lg:inline-flex"
            aria-label="Siguiente"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}