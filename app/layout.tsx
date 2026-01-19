import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Massimus - Aprenda Agilidade do Jeito Certo",
  description:
    "Microlearning ágil via WhatsApp + Certificações SAFe, Scrum e Management 3.0. Aprenda em 5 minutos por dia com +20.000 profissionais certificados.",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#67B745",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <Header />
          {children}
          <Analytics />
      </body>

    </html>
  )
}
