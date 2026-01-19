"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="hidden sm:block">Transforme sua carreira com certificações reconhecidas mundialmente</p>
          <div className="flex items-center gap-4">
            <a href="tel:+551141184686" className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" />
              +55 11 4118-4686
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/massimus-logo.png" alt="Massimus" width={160} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="#cursos"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cursos
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="#microlearning"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Microlearning
            </Link>
            <Link
              href="#sobre"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#empresas"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Para Empresas
            </Link>
            <Link
              href="#contato"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-medium text-foreground">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Explorar Cursos
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              <Link href="#cursos" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg">
                Cursos
              </Link>
              <Link href="#microlearning" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg">
                Microlearning
              </Link>
              <Link href="#sobre" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg">
                Sobre
              </Link>
              <Link href="#empresas" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg">
                Para Empresas
              </Link>
              <Link href="#contato" className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg">
                Contato
              </Link>
              <div className="flex flex-col gap-2 pt-4 px-4">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Login
                </Button>
                <Button size="sm" className="w-full bg-primary text-primary-foreground">
                  Explorar Cursos
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
