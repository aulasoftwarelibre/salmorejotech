import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-salmorejo-gradient">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center text-white">
          <Image
            src="/images/logo-aula-blanco.png"
            alt="Aula de Software Libre"
            width={96}
            height={96}
            className="h-20 w-20 object-contain"
          />
          <div>
            <p className="font-display text-3xl leading-none sm:text-4xl">
              Aula de Software Libre
            </p>
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-white/90">
              Organizamos numerosos eventos a lo largo de todo el año. Nuestro
              objetivo es enseñar y acercar a personas de todo tipo la
              importancia del software libre. Universidad de Córdoba.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-white/90 sm:flex-row sm:gap-8">
            <a
              href="mailto:aulasoftwarelibre@uco.es"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="size-4" aria-hidden="true" />
              aulasoftwarelibre@uco.es
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              Aulario Averroes · Campus de Rabanales
            </span>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/70">
          <p>
            SalmorejoTech · Evento organizado por el Aula de Software Libre de la
            Universidad de Córdoba
          </p>
        </div>
      </div>
    </footer>
  )
}
