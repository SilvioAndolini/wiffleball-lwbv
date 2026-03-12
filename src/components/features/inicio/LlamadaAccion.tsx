'use client'

// Sección de llamada a la acción (CTA) con estadísticas animadas

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { RUTAS } from '@/lib/utilidades/constantes'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

// Estadísticas de la liga
const ESTADISTICAS = [
  { numero: 50, sufijo: '+', etiqueta: 'Jugadores' },
  { numero: 12, sufijo: '', etiqueta: 'Equipos' },
  { numero: 24, sufijo: '', etiqueta: 'Juegos' },
  { numero: 6, sufijo: '', etiqueta: 'Ciudades' },
]

// Componente de contador animado
function ContadorAnimado({ objetivo, sufijo }: { objetivo: number; sufijo: string }) {
  const [conteo, setConteo] = useState(0)
  const ref = useRef(null)
  const enVista = useInView(ref, { once: true })

  useEffect(() => {
    if (!enVista) return

    const duracion = 2000 // 2 segundos
    const incremento = objetivo / (duracion / 16) // ~60fps
    let actual = 0

    const intervalo = setInterval(() => {
      actual += incremento
      if (actual >= objetivo) {
        setConteo(objetivo)
        clearInterval(intervalo)
      } else {
        setConteo(Math.floor(actual))
      }
    }, 16)

    return () => clearInterval(intervalo)
  }, [enVista, objetivo])

  return (
    <span ref={ref} className="tabular-nums">
      {conteo}{sufijo}
    </span>
  )
}

export function LlamadaAccion() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-fondo-principal via-fondo-elevado/50 to-fondo-principal" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 gradiente-venezuela" style={{ filter: 'blur(100px)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Título */}
        <ContenedorAnimado>
          <h2 className="font-titulos text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-texto-principal">ÚNETE A LA </span>
            <span className="texto-gradiente-venezuela">LIGA</span>
          </h2>
          <p className="text-texto-secundario text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Forma parte de la comunidad de Wiffle Ball más vibrante de Venezuela.
            No importa tu nivel, aquí todos juegan.
          </p>
        </ContenedorAnimado>

        {/* Botón CTA grande */}
        <ContenedorAnimado retraso={0.2}>
          <Link href={RUTAS.INSCRIPCIONES}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-amarillo-neon text-fondo-principal font-titulos font-bold text-xl px-12 py-8 hover:bg-amarillo-brillante transition-all animate-pulso-neon"
              >
                INSCRÍBETE AHORA
              </Button>
            </motion.div>
          </Link>
        </ContenedorAnimado>

        {/* Estadísticas */}
        <ContenedorAnimado retraso={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ESTADISTICAS.map((stat) => (
              <div key={stat.etiqueta} className="text-center">
                <div className="font-titulos text-4xl md:text-5xl font-bold text-amarillo-neon mb-2">
                  <ContadorAnimado objetivo={stat.numero} sufijo={stat.sufijo} />
                </div>
                <div className="text-texto-apagado text-sm uppercase tracking-wider">
                  {stat.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </ContenedorAnimado>
      </div>
    </section>
  )
}
