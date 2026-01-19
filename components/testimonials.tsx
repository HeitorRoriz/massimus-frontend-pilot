import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "A certificação CSM da Massimus foi um divisor de águas na minha carreira. Os instrutores são excepcionais.",
    author: "Maria Silva",
    role: "Scrum Master",
    company: "iFood",
    rating: 5,
  },
  {
    quote: "O Leading SAFe me deu todas as ferramentas para liderar a transformação ágil na minha empresa.",
    author: "Carlos Santos",
    role: "Agile Coach",
    company: "Itaú",
    rating: 5,
  },
  {
    quote: "Melhor investimento que fiz na carreira. O suporte pós-curso e o microlearning fazem toda diferença.",
    author: "Ana Costa",
    role: "Product Owner",
    company: "Nubank",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">O Que Nossos Alunos Dizem</h2>
          <p className="text-muted-foreground leading-relaxed">
            +20.000 profissionais já transformaram suas carreiras com a Massimus
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
