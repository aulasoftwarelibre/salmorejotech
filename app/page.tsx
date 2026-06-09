import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { EditionsGrid } from "@/components/editions-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <EditionsGrid />
      <SiteFooter />
    </main>
  )
}
