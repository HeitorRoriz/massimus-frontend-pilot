import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

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
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999, padding: 12, background: "yellow", color: "black", fontWeight: 700 }}>
    LAYOUT TEST — IF YOU SEE THIS, app/layout.tsx IS ACTIVE
  </div>

  <div style={{ position: "fixed", top: 48, left: 0, right: 0, zIndex: 99999, background: "white", borderBottom: "1px solid #ddd" }}>
    <SiteHeader />
  </div>

  <div style={{ paddingTop: 120 }}>
    {children}
  </div>

  <Analytics />
</body>


    </html>
  )
}
