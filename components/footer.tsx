import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/massimus-logo-white.png"
                alt="Massimus"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs mb-6">
              Há mais de 18 anos transformando carreiras através de certificações e treinamentos em agilidade. Mais de
              30.000 profissionais treinados globalmente.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 text-background" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-4 w-4 text-background" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="h-4 w-4 text-background" />
              </a>
              <a
                href="https://wa.me/5511953121868"
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-background">Cursos</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Scrum Master (CSM)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Product Owner (CSPO)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Management 3.0
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Kanban System Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AI for Scrum Masters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-background">Empresa</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <Link href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#empresas" className="hover:text-primary transition-colors">
                  Para Empresas
                </Link>
              </li>
              <li>
                <Link href="#microlearning" className="hover:text-primary transition-colors">
                  Microlearning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-background">Contato</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <a href="tel:+551141184686" className="hover:text-primary transition-colors">
                  +55 11 4118-4686
                </a>
              </li>
              <li>
                <a href="mailto:contato@massimus.com" className="hover:text-primary transition-colors">
                  contato@massimus.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511953121868" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4 text-sm text-background mt-6">Legal</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">© 2025 Massimus. Todos os direitos reservados.</p>
          <p className="text-sm text-background/50">Escola de Agilidade mais experiente do Brasil — Desde 2007</p>
        </div>
      </div>
    </footer>
  )
}
