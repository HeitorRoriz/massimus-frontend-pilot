import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Certifications } from "@/components/certifications"
import { Courses } from "@/components/courses"
import { Microlearning } from "@/components/microlearning"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <Certifications />
      <Courses />
      <Microlearning />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
