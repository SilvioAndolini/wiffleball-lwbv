'use client'

// Sección "Nuestros Momentos" - Grid de fotos verticales + Showreel
// Layout: fotos a la izquierda, video showreel a la derecha

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Volume2, VolumeX } from 'lucide-react'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

// Fotos con orientación principalmente vertical
const FOTOS = [
  {
    id: 1,
    src: '/imagenes/DSC06563.webp',
    titulo: 'El bateador',
    descripcion: 'Concentración total en el plato',
    span: 'col-span-1 row-span-3',
    real: true,
  },
  {
    id: 2,
    src: '/imagenes/DSC06645.jpg',
    titulo: 'En práctica',
    descripcion: 'Preparando el swing perfecto',
    span: 'col-span-1 row-span-2',
    real: true,
  },
  {
    id: 3,
    src: '/imagenes/DSC06704.jpg',
    titulo: 'Copa Venezuela',
    descripcion: 'El torneo nacional más importante',
    span: 'col-span-1 row-span-2',
    real: true,
  },
  {
    id: 4,
    src: '/imagenes/DSC06716.jpg',
    titulo: 'Doble Jornada',
    descripcion: 'Noche de wiffle ball bajo las luces',
    span: 'col-span-1 row-span-1',
    real: true,
  },
  {
    id: 5,
    src: '/imagenes/DSC06449.jpg',
    titulo: 'Inauguración',
    descripcion: 'El inicio de una nueva temporada',
    span: 'col-span-2 row-span-1',
    real: true,
  },
]

const COLORES_ACENTO = ['#FFFFFF', '#E5E5E5', '#9CA3AF', '#C0C0C0', '#808080']

export function CarruselFotos() {
  const refVideo = useRef<HTMLVideoElement>(null)
  const [silenciado, setSilenciado] = useState(true)

  function alternarSonido() {
    const video = refVideo.current
    if (!video) return
    if (silenciado) {
      video.muted = false
      video.volume = 0.4
    } else {
      video.muted = true
    }
    setSilenciado(!silenciado)
  }

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <ContenedorAnimado className="mb-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
            GALERÍA
          </p>
          <h2 className="font-titulos text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
            <span className="text-texto-principal">NUESTROS</span>
            <br />
            <span className="texto-gradiente">MOMENTOS</span>
          </h2>
        </ContenedorAnimado>

        {/* Layout: fotos izquierda + showreel derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 items-stretch">

          {/* ── Columna izquierda: grid de fotos verticales ── */}
          <div className="grid grid-cols-2 gap-3 auto-rows-[140px] md:auto-rows-[160px]">
            {FOTOS.map((foto, indice) => (
              <motion.div
                key={foto.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${foto.span}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: indice * 0.08 }}
              >
                {foto.real ? (
                  /* Imagen real */
                  <Image
                    src={foto.src!}
                    alt={foto.titulo}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                ) : (
                  /* Placeholder */
                  <div className="absolute inset-0 bg-fondo-elevado border border-borde-sutil/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-5xl opacity-10"
                        style={{ color: COLORES_ACENTO[indice % COLORES_ACENTO.length] }}
                      >
                        ⚾
                      </span>
                    </div>
                  </div>
                )}

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-fondo-principal/90 via-fondo-principal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div>
                    <h3
                      className="font-titulos text-base font-bold mb-0.5"
                      style={{ color: COLORES_ACENTO[indice % COLORES_ACENTO.length] }}
                    >
                      {foto.titulo}
                    </h3>
                    <p className="text-texto-secundario/70 text-[11px] leading-snug">
                      {foto.descripcion}
                    </p>
                  </div>
                </div>

                {/* Borde de color en hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `1px solid ${COLORES_ACENTO[indice % COLORES_ACENTO.length]}40`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* ── Columna derecha: showreel ── */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Video que ocupa toda la altura de la columna izquierda */}
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-fondo-elevado border border-borde-sutil/40">
              <video
                ref={refVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>

              {/* Botón silencio/sonido — esquina superior derecha */}
              <button
                onClick={alternarSonido}
                className="absolute top-4 right-4 z-10 boton-vidrio rounded-full p-2 text-azul-cielo"
                aria-label={silenciado ? 'Activar sonido' : 'Silenciar'}
              >
                {silenciado
                  ? <VolumeX className="size-4" />
                  : <Volume2 className="size-4" />
                }
              </button>

              {/* Etiqueta superpuesta — esquina superior izquierda */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 vidrio rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-texto-principal animate-pulse" />
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-texto-principal/80">
                  SHOWREEL OFICIAL
                </p>
              </div>

              {/* Degradado inferior sutil */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-fondo-principal/70 to-transparent pointer-events-none z-10" />

              {/* Texto inferior */}
              <p className="absolute bottom-4 left-4 right-4 text-texto-apagado text-[11px] z-10">
                Liga Venezolana de Wiffle Ball — Temporada 2026
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
