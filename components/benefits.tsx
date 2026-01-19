import {
  Award,
  BookOpen,
  Globe,
  Headphones,
  Target,
  Zap,
  Building2,
  Calendar,
  Users,
  GraduationCap,
} from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Certificações Globais",
    description: "Credenciais reconhecidas por Scrum Alliance, Kanban University e Management 3.0.",
  },
  {
    icon: Headphones,
    title: "Instrutores Experientes",
    description: "Profissionais com +15 anos de mercado e cases reais.",
  },
  {
    icon: Globe,
    title: "100% Online ou Presencial",
    description: "Flexibilidade total para você escolher como estudar.",
  },
  {
    icon: BookOpen,
    title: "Material de Alta Qualidade",
    description: "Conteúdo premium desenvolvido por especialistas do mercado.",
  },
  { icon: Target, title: "Aplicação Prática", description: "Exercícios e simulados para fixar o conhecimento." },
  { icon: Zap, title: "Microlearning Incluso", description: "Acesso exclusivo aos grupos de WhatsApp." },
  {
    icon: GraduationCap,
    title: "Escola de Agilidade",
    description: "Escola de agilidade mais experiente do Brasil.",
  },
]

export function Benefits() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Por Que Escolher a Massimus?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Há mais de <span className="font-semibold text-foreground">18 anos</span> no Brasil, desde maio de 2007,
              somos referência em transformação organizacional e formação de líderes ágeis.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">30k+</p>
                  <p className="text-sm text-muted-foreground">Profissionais treinados</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Empresas atendidas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">18+</p>
                  <p className="text-sm text-muted-foreground">Anos de mercado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="bg-muted/50 rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(4).map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
