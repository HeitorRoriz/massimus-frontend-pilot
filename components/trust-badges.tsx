"use client"

import { useEffect, useRef } from "react"

export function TrustBadges() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  const companies = [
    "Itaú",
    "Nubank",
    "iFood",
    "Magazine Luiza",
    "Ambev",
    "Bradesco",
    "Santander",
    "Globo",
    "Itaú",
    "Nubank",
    "iFood",
    "Magazine Luiza",
    "Ambev",
    "Bradesco",
    "Santander",
    "Globo",
  ]

  return (
    <section className="py-8 bg-muted/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Confiado por <span className="font-semibold text-foreground">500+</span> empresas no Brasil
        </p>
      </div>

      <div ref={scrollRef} className="flex gap-12 overflow-hidden whitespace-nowrap">
        {companies.map((company, index) => (
          <span
            key={index}
            className="text-xl font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors flex-shrink-0"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  )
}
