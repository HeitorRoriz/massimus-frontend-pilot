import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
            Aprenda Habilidades{" "}
            <span className="relative inline-block">
              <span className="text-primary">Em Alta</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary/30"
                />
              </svg>
            </span>{" "}
            para os Empregos do Futuro
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Experiência de aprendizado que entrega resultados. Estamos revolucionando a forma como você aprende novas
            tecnologias e vamos te ajudar a ficar pronto para o mercado, rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gap-2 text-base h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explorar Cursos
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Learner rating badge */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold">4.8/5</span>
                <span className="text-muted-foreground"> • 12.500+ avaliações</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
