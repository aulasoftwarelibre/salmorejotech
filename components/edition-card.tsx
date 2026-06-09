import type { Edition } from "@/lib/editions"
import { ArrowUpRight, Calendar, MapPin } from "lucide-react"

function StatusBadge({ status }: { status: Edition["status"] }) {
  if (status === "upcoming" || status === "announced") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        <span className="size-2 animate-pulse rounded-full bg-white" />
        {status === "announced" ? "Por anunciar" : "Próxima"}
      </span>
    )
  }
  if (status === "cancelled") {
    return (
      <span className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
        Cancelada
      </span>
    )
  }
  return (
    <span className="inline-flex items-center rounded-full bg-salmorejo-coral/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-salmorejo-red">
      Celebrada
    </span>
  )
}

export function EditionCard({ edition }: { edition: Edition }) {
  const isUpcoming = edition.status === "upcoming" || edition.status === "announced"
  const isCancelled = edition.status === "cancelled"

  const inner = (
    <article
      style={
        isUpcoming
          ? {
              backgroundImage:
                "linear-gradient(125deg, oklch(0.7 0.2 50) 0%, oklch(0.62 0.23 32) 50%, oklch(0.55 0.24 18) 100%)",
            }
          : undefined
      }
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300",
        isUpcoming
          ? "border-transparent text-white shadow-xl shadow-salmorejo-red/30 hover:-translate-y-1 hover:shadow-2xl"
          : isCancelled
            ? "border-dashed border-border bg-muted/40 text-foreground"
            : "border-border bg-card text-foreground shadow-sm hover:-translate-y-1 hover:border-salmorejo-coral hover:shadow-xl",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={[
            "font-display text-6xl leading-none sm:text-7xl",
            isUpcoming
              ? "text-white"
              : isCancelled
                ? "text-muted-foreground"
                : "text-salmorejo-coral",
          ].join(" ")}
        >
          {edition.year}
        </span>
        <StatusBadge status={edition.status} />
      </div>

      <div
        className={[
          "mt-4 flex items-center gap-2 text-sm font-medium",
          isUpcoming ? "text-white/90" : "text-muted-foreground",
        ].join(" ")}
      >
        <Calendar className="size-4 shrink-0" aria-hidden="true" />
        {edition.date}
      </div>

      <h3
        className={[
          "mt-4 text-balance text-lg font-bold",
          isUpcoming ? "text-white" : "text-foreground",
        ].join(" ")}
      >
        {edition.tagline}
      </h3>

      <p
        className={[
          "mt-2 text-pretty text-sm leading-relaxed",
          edition.status === "announced" ? "" : "flex-1",
          isUpcoming ? "text-white/90" : "text-muted-foreground",
        ].join(" ")}
      >
        {edition.description}
      </p>

      {edition.venue && (
        <div
          className={[
            "mt-4 flex items-center gap-2 text-xs font-medium",
            isUpcoming ? "text-white/85" : "text-muted-foreground",
          ].join(" ")}
        >
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          {edition.venue}
        </div>
      )}

      {edition.url ? (
        <div
          className={[
            "mt-6 inline-flex items-center gap-1.5 text-sm font-bold",
            isUpcoming ? "text-white" : "text-salmorejo-red",
          ].join(" ")}
        >
          Visitar la web
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      ) : edition.status === "announced" ? (
        <div className="flex-1" />
      ) : (
        <div className="mt-6 text-sm font-medium text-muted-foreground">
          Sin edición este año
        </div>
      )}
    </article>
  )

  if (!edition.url) {
    return inner
  }

  return (
    <a
      href={edition.url}
      target="_blank"
      rel="noreferrer"
      className="block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-salmorejo-red focus-visible:ring-offset-2"
      aria-label={`Edición ${edition.year}: ${edition.tagline}`}
    >
      {inner}
    </a>
  )
}
