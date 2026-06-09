import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Rubik, Amatic_SC } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

const amatic = Amatic_SC({
  variable: '--font-amatic',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'SalmorejoTech · Todas las ediciones',
  description:
    'SalmorejoTech, el evento tecnológico con sabor cordobés organizado por el Aula de Software Libre de la Universidad de Córdoba. Revive todas las ediciones desde 2019.',
  generator: 'v0.app',
  keywords: [
    'SalmorejoTech',
    'evento',
    'tecnología',
    'Córdoba',
    'Aula de Software Libre',
    'software libre',
    'congreso',
  ],
  openGraph: {
    title: 'SalmorejoTech · Todas las ediciones',
    description:
      'El evento tecnológico con sabor cordobés. Revive todas las ediciones del SalmorejoTech.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${rubik.variable} ${amatic.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
