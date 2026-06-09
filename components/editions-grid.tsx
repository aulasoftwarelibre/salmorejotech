import { editions } from "@/lib/editions"
import { EditionCard } from "@/components/edition-card"

export function EditionsGrid() {
  return (
    <section id="ediciones" className="scroll-mt-8 bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display text-3xl text-salmorejo-red sm:text-4xl">
            Todas las ediciones
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
            Un recorrido por la historia del SalmorejoTech
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Cada año reunimos a la comunidad tecnológica de Córdoba. Explora
            cada edición y revive las charlas, ponentes y momentos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {editions.map((edition) => (
            <EditionCard key={edition.year} edition={edition} />
          ))}
        </div>
      </div>
    </section>
  )
}
