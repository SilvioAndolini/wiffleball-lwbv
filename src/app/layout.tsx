import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { BarraNavegacion } from '@/components/features/navegacion/BarraNavegacion'
import { PiePagina } from '@/components/features/compartidos/PiePagina'
import { METADATA_SITIO } from '@/lib/utilidades/constantes'
import './globals.css'

// Fuentes personalizadas
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadata global del sitio
export const metadata: Metadata = {
  title: {
    default: METADATA_SITIO.titulo,
    template: `%s | ${METADATA_SITIO.titulo}`,
  },
  description: METADATA_SITIO.descripcion,
  openGraph: {
    title: METADATA_SITIO.titulo,
    description: METADATA_SITIO.descripcion,
    type: 'website',
    locale: 'es_VE',
  },
}

export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-fondo-principal text-texto-principal antialiased">
        <BarraNavegacion />
        <main className="min-h-screen">
          {children}
        </main>
        <PiePagina />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
