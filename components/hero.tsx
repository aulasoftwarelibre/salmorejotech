import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-salmorejo-gradient">
      {/* Organic blob background from the 2021 edition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60 mix-blend-soft-light"
        style={{ backgroundImage: "url('/images/salmorejo-fondo.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <Image
          src="/images/isologo-blanco.svg"
          alt="SalmorejoTech"
          width={560}
          height={120}
          priority
          className="w-full max-w-md drop-shadow-lg sm:max-w-lg"
        />

        <p className="mt-8 font-display text-4xl leading-none text-white/95 sm:text-5xl md:text-6xl">
          El evento tecnológico con sabor cordobés
        </p>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
          Desde 2019, el congreso de tecnología más grande de Córdoba. Charlas,
          software libre y networking organizados por el Aula de Software Libre
          de la Universidad de Córdoba.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#ediciones"
            className="rounded-full bg-white px-8 py-3 text-base font-bold text-salmorejo-red shadow-lg transition-transform hover:scale-105"
          >
            Ver todas las ediciones
          </a>
          <a
            href="https://salmorejo.tech/2026/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-white px-8 py-3 text-base font-bold text-white transition-colors hover:bg-white/15"
          >
            Edición 2026
          </a>
        </div>
      </div>
    </section>
  )
}
