'use client'

// Sección CTA estilo GRIND con estadísticas y texto LWBV de fondo

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ENLACE_WHATSAPP } from '@/lib/utilidades/constantes'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

const ESTADISTICAS = [
  { numero: 50, sufijo: '+', etiqueta: 'Jugadores' },
  { numero: 12, sufijo: '', etiqueta: 'Equipos' },
  { numero: 24, sufijo: '', etiqueta: 'Juegos' },
  { numero: 6, sufijo: '', etiqueta: 'Ciudades' },
]

function ContadorAnimado({ objetivo, sufijo }: { objetivo: number; sufijo: string }) {
  const [conteo, setConteo] = useState(0)
  const ref = useRef(null)
  const enVista = useInView(ref, { once: true })

  useEffect(() => {
    if (!enVista) return

    const duracion = 2000
    const incremento = objetivo / (duracion / 16)
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
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-fondo-principal via-fondo-elevado/30 to-fondo-principal" />

      {/* Texto LWBV de fondo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span
          className="texto-fondo-3d font-titulos font-bold leading-none select-none opacity-50"
          style={{ fontSize: 'clamp(150px, 20vw, 400px)' }}
        >
          LWBV
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Título alineado izquierda */}
          <ContenedorAnimado>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              ÚNETE
            </p>
            <h2 className="font-titulos text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
              <span className="text-texto-principal">ÚNETE AL</span>
              <br />
              <span className="texto-gradiente">JUEGO.</span>
            </h2>
            <p className="text-texto-secundario/70 text-sm md:text-base max-w-md leading-relaxed mb-8">
              Forma parte de la comunidad de Wiffle Ball más vibrante de Venezuela.
              No importa tu nivel, aquí todos juegan.
            </p>
            <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="boton-vidrio text-azul-cielo font-titulos font-bold text-sm tracking-wider rounded-full px-8 py-6 gap-2">
                  INSCRÍBETE AHORA
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </a>
          </ContenedorAnimado>

          {/* Estadísticas */}
          <ContenedorAnimado retraso={0.3}>
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {ESTADISTICAS.map((stat) => (
                <div key={stat.etiqueta}>
                  <div className="font-titulos text-4xl md:text-5xl font-bold text-texto-principal mb-1">
                    <ContadorAnimado objetivo={stat.numero} sufijo={stat.sufijo} />
                  </div>
                  <div className="text-[10px] text-texto-apagado uppercase tracking-[0.2em]">
                    {stat.etiqueta}
                  </div>
                </div>
              ))}
            </div>
          </ContenedorAnimado>
        </div>
      </div>
    </section>
  )
}
