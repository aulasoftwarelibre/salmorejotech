export type Edition = {
  year: number
  date: string
  shortDate: string
  tagline: string
  description: string
  url: string | null
  stats?: { value: string; label: string }[]
  highlights?: string[]
  // "announced" = próxima edición confirmada pero todavía sin fecha (TBA)
  status: "past" | "upcoming" | "announced" | "cancelled"
  venue?: string
}

// Editions of the SalmorejoTech congress, organized by the
// Aula de Software Libre of the University of Córdoba.
export const editions: Edition[] = [
  {
    year: 2026,
    date: "8 de mayo de 2026",
    shortDate: "8 MAY 2026",
    tagline: "La cita de la tecnología cordobesa regresa con una energía imparable",
    description:
      "Vuelve el evento más cordobés y tech de la provincia con grandes ponentes, networking y productos típicos de la capital de Al-Ándalus. Dos tracks paralelos: Omeya y Mudéjar.",
    url: "https://salmorejo.tech/2026/",
    venue: "Salón de Actos del Rectorado · Córdoba",
    stats: [
      { value: "+400", label: "Asistentes" },
      { value: "+10", label: "Ponencias" },
      { value: "2", label: "Tracks" },
    ],
    highlights: ["Track Omeya", "Track Mudéjar", "Networking"],
    status: "upcoming",
  },
  {
    year: 2025,
    date: "2025",
    shortDate: "2025",
    tagline: "Otro año de tecnología con sabor cordobés",
    description:
      "Una nueva edición del encuentro tecnológico de referencia en Córdoba, con charlas, comunidad y el mejor ambiente.",
    url: "https://salmorejo.tech/2025/",
    status: "past",
  },
  {
    year: 2024,
    date: "2024",
    shortDate: "2024",
    tagline: "El evento tecnológico de Córdoba",
    description:
      "El SalmorejoTech sigue creciendo como punto de encuentro de profesionales, estudiantes y empresas del sector tecnológico cordobés.",
    url: "https://salmorejo.tech/2024/",
    status: "past",
  },
  {
    year: 2023,
    date: "28 de abril de 2023",
    shortDate: "28 ABR 2023",
    tagline: "Tecnología, comunidad y networking",
    description:
      "Una jornada completa de charlas y networking donde compartir y hacer comunidad con el ecosistema tecnológico de Córdoba.",
    url: "https://salmorejo.tech/2023/",
    status: "past",
  },
  {
    year: 2022,
    date: "13 de mayo de 2022",
    shortDate: "13 MAY 2022",
    tagline: "Tu evento tecnológico con sabor cordobés",
    description:
      "El congreso tecnológico más grande de Córdoba. Un día repleto de charlas, software y networking con profesionales, estudiantes y empresarios.",
    url: "https://salmorejo.tech/2022/",
    venue: "Salón de Actos del Rectorado · Córdoba",
    stats: [
      { value: "+400", label: "Asistentes" },
      { value: "+10", label: "Charlas" },
      { value: "100%", label: "Comida + Networking" },
    ],
    status: "past",
  },
  {
    year: 2021,
    date: "12 de noviembre de 2021",
    shortDate: "12 NOV 2021",
    tagline: "Tu encuentro tecnológico cordobés",
    description:
      "Tras el éxito de 2019, el SalmorejoTech volvió en formato presencial con todas las medidas de seguridad. Una jornada completa dedicada a la tecnología y el software libre.",
    url: "https://salmorejo.tech/2021/",
    venue: "Córdoba",
    highlights: ["Formato presencial", "Charlas", "Networking"],
    status: "past",
  },
  {
    year: 2020,
    date: "Cancelado",
    shortDate: "—",
    tagline: "Edición suspendida por la pandemia",
    description:
      "La edición de 2020 no pudo celebrarse a causa de la pandemia de COVID-19. Nos volvimos a ver, con más ganas que nunca, en 2021.",
    url: null,
    status: "cancelled",
  },
  {
    year: 2019,
    date: "13 de septiembre de 2019",
    shortDate: "13 SEP 2019",
    tagline: "El comienzo de todo",
    description:
      "La primera edición del SalmorejoTech, donde nació el evento tecnológico con más sabor de Córdoba. El rotundo éxito que dio inicio a todo.",
    url: "https://salmorejo.tech/2019/",
    venue: "Córdoba",
    status: "past",
  },
]
