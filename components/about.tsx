const facts = [
  {
    value: "+400",
    label: "Asistentes",
    description: "Profesionales, estudiantes y empresas en cada edición.",
  },
  {
    value: "+10",
    label: "Charlas",
    description: "Ponencias de referentes del sector tecnológico.",
  },
  {
    value: "2019",
    label: "Desde",
    description: "Año tras año, salvo la pausa de 2020 por la pandemia.",
  },
  {
    value: "Córdoba",
    label: "Sede",
    description: "La capital de Al-Ándalus, cuna del mejor salmorejo.",
  },
]

export function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-display text-3xl text-salmorejo-red sm:text-4xl">
          ¿Qué es el SalmorejoTech?
        </span>
        <h2 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
          El congreso tecnológico más grande de Córdoba
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          Un día repleto de charlas, software y networking donde compartir y
          hacer comunidad con profesionales, estudiantes y empresarios. Un
          evento organizado por el Aula de Software Libre de la Universidad de
          Córdoba para acercar la tecnología y el software libre a todo el mundo.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <div className="font-display text-4xl leading-none text-salmorejo-coral sm:text-5xl">
              {fact.value}
            </div>
            <div className="mt-2 text-sm font-bold uppercase tracking-wide text-foreground">
              {fact.label}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
