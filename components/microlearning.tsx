import { MessageCircle, Brain, Users, Trophy, Smartphone, CheckCircle2, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Brain,
    title: "Quiz Diários",
    description: "Teste e reforce seu conhecimento em apenas 5 minutos por dia",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com milhares de profissionais e troque experiências",
  },
  {
    icon: Trophy,
    title: "Gamificação",
    description: "Rankings semanais e badges que motivam seu progresso",
  },
]

const benefits = [
  "Conteúdo direto no seu WhatsApp",
  "Aprenda em micro-momentos do dia",
  "Discussões práticas com profissionais",
  "Dicas e casos reais do mercado",
]

export function Microlearning() {
  return (
    <section id="microlearning" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="h-4 w-4" />
            Exclusivo Massimus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Microlearning via WhatsApp</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complemente sua certificação com aprendizado contínuo. Receba conteúdo diário, participe de discussões e
            mantenha-se atualizado — tudo em apenas 5 minutos por dia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left side - Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Como funciona?</h3>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-background rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
                Entrar no Grupo WhatsApp
              </Button>
            </div>
          </div>

          {/* Right side - Stats and visual */}
          <div className="bg-background rounded-2xl border border-border p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Grupo Massimus Agile</p>
                <p className="text-sm text-muted-foreground">Comunidade de aprendizado</p>
              </div>
            </div>

            {/* Simulated chat messages */}
            <div className="space-y-3 mb-6 flex-1">
              <div className="bg-muted/50 rounded-lg rounded-tl-none p-3 max-w-[85%]">
                <p className="text-xs text-primary font-medium mb-1">Quiz do Dia</p>
                <p className="text-sm">Qual é o principal papel do Scrum Master durante a Daily?</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 09:00
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto">
                <p className="text-sm">Facilitar a comunicação e remover impedimentos!</p>
                <p className="text-xs text-muted-foreground mt-1 text-right">09:02</p>
              </div>
              <div className="bg-muted/50 rounded-lg rounded-tl-none p-3 max-w-[85%]">
                <p className="text-xs text-primary font-medium mb-1 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Dica do Dia
                </p>
                <p className="text-sm">Use o Planning Poker para estimativas mais precisas...</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 12:00
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border mt-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">2.8k+</p>
                <p className="text-xs text-muted-foreground">Membros ativos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">93%</p>
                <p className="text-xs text-muted-foreground">Engajamento</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground">Quiz enviados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
