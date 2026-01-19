"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

const categories = ["Todos", "Agile & Scrum", "Product Management", "Liderança", "AI", "Coaching"]

const courses = [
  {
    title: "Certified ScrumMaster® (CSM)",
    description: "Torne-se um líder servidor certificado pela Scrum Alliance.",
    duration: "16h",
    students: "8.000+",
    badge: "Scrum Alliance",
    rating: "4.9",
    category: "Agile & Scrum",
    featured: true,
    trending: true,
    image: "/images/csm.png",
  },
  {
    title: "CSPO® Certification",
    description: "Domine Product Ownership e maximize entrega de valor.",
    duration: "16h",
    students: "4.500+",
    badge: "Scrum Alliance",
    rating: "4.8",
    category: "Product Management",
    featured: false,
    trending: false,
    image: "/images/cspo.png",
  },
  {
    title: "Management 3.0®",
    description: "Liderança moderna para times de alta performance.",
    duration: "16h",
    students: "3.500+",
    badge: "M3.0",
    rating: "4.7",
    category: "Liderança",
    featured: true,
    trending: false,
    image: "/images/badge-management30-agile-team-leadership-workshop.webp",
  },
  {
    title: "Kanban System Design (KSD)",
    description: "Domine o design de sistemas Kanban certificado pela Kanban University.",
    duration: "16h",
    students: "2.800+",
    badge: "Kanban University",
    rating: "4.8",
    category: "Agile & Scrum",
    featured: false,
    trending: true,
    image: "/images/kanban-certified-training.png",
  },
  {
    title: "AI for Scrum Masters",
    description: "Microcredencial para Scrum Masters dominarem ferramentas de IA no dia a dia.",
    duration: "8h",
    students: "1.200+",
    badge: "Scrum Alliance",
    rating: "4.9",
    category: "AI",
    featured: true,
    trending: true,
    image: "/images/ai-for-scrum-masters.png",
  },
  {
    title: "AI for Product Owners",
    description: "Microcredencial para Product Owners alavancarem IA na gestão de produtos.",
    duration: "8h",
    students: "950+",
    badge: "Scrum Alliance",
    rating: "4.9",
    category: "AI",
    featured: true,
    trending: true,
    image: "/images/ai-for-product-owners.png",
  },
  {
    title: "CAC - Certified Agile Coach",
    description: "Formação completa para se tornar um Agile Coach certificado pela Massimus.",
    duration: "40h",
    students: "2.100+",
    badge: "Massimus",
    rating: "4.9",
    category: "Coaching",
    featured: true,
    trending: false,
    image: "/images/selo-cac.png",
  },
]

export function Courses() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredCourses = activeCategory === "Todos" ? courses : courses.filter((c) => c.category === activeCategory)

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Encontre o Curso Certo Para Seus Objetivos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore mais de 20 cursos e certificações reconhecidas mundialmente
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                {course.image ? (
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={`${course.title} certification badge`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-4xl font-bold text-primary/20">{course.badge}</span>
                )}
                {course.trending && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-orange-500 text-white">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                )}
                {course.featured && !course.trending && (
                  <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                    Recomendado
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                >
                  Ver Detalhes
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="gap-2 border-2 bg-transparent">
            Ver Todos os Cursos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
