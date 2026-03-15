'use client'

// Sección Hero estilo GRIND + Liquid Glass
// Pantalla completa con carrusel de fondo, texto LWBV 3D, título bold, widget CTA glass y prueba social

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ENLACE_WHATSAPP } from '@/lib/utilidades/constantes'

// Avatares placeholder para prueba social
const AVATARES_PLACEHOLDER = [
  { id: 1, color: '#FFFFFF' },
  { id: 2, color: '#C0C0C0' },
  { id: 3, color: '#9CA3AF' },
  { id: 4, color: '#E5E5E5' },
]

// Imágenes del carrusel de fondo
const IMAGENES_HEROE = [
  { src: '/imagenes/DSC06563.webp', alt: 'Jugador LWBV en posición de bateo' },
  { src: '/imagenes/DSC06645.jpg', alt: 'Jugadores LWBV en práctica de bateo' },
]

const INTERVALO_CARRUSEL = 5000 // 5 segundos

export function SeccionHeroe() {
  const referencia = useRef(null)
  const [indiceActual, setIndiceActual] = useState(0)

  const { scrollYProgress } = useScroll({
    target: referencia,
    offset: ['start start', 'end start'],
  })

  const opacidadContenido = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const yContenido = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  // Avance automático del carrusel
  useEffect(() => {
    const temporizador = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % IMAGENES_HEROE.length)
    }, INTERVALO_CARRUSEL)
    return () => clearInterval(temporizador)
  }, [])

  return (
    <section
      ref={referencia}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Carrusel de fondo */}
      <AnimatePresence>
        <motion.div
          key={indiceActual}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image
            src={IMAGENES_HEROE[indiceActual].src}
            alt={IMAGENES_HEROE[indiceActual].alt}
            fill
            priority={indiceActual === 0}
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay oscuro sobre el carrusel */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Texto de fondo "LWBV" - estilo 3D */}
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none">
        <motion.span
          className="texto-fondo-3d font-titulos font-bold leading-none select-none"
          style={{
            fontSize: 'clamp(200px, 25vw, 500px)',
            marginRight: '-2vw',
            marginBottom: '-3vw',
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        >
          LWBV
        </motion.span>
      </div>

      {/* Contenido principal */}
      <motion.div
        style={{ opacity: opacidadContenido, y: yContenido }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Badge de temporada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block vidrio text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/90 rounded-full px-4 py-1.5">
            TEMPORADA 2026
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          className="font-titulos font-bold leading-[0.9] mb-8"
          initial="oculto"
          animate="visible"
          variants={{
            oculto: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {['PASIÓN', 'POR EL', 'WIFFELBALL.'].map((linea, i) => (
            <motion.span
              key={i}
              className={`block text-6xl sm:text-7xl md:text-8xl lg:text-9xl ${
                i === 2 ? 'texto-gradiente' : 'text-texto-principal'
              }`}
              variants={{
                oculto: { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  clipPath: 'inset(0% 0 0 0)',
                  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              {linea}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-texto-secundario/70 text-sm md:text-base max-w-md leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          La liga de Wiffle Ball más emocionante de Venezuela.
          Únete, juega y vive la pasión del deporte.
        </motion.p>

        {/* Widget CTA - Liquid Glass - debajo del texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="vidrio-azul rounded-2xl p-5 max-w-sm">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-cielo/70 mb-3">
              ¿LISTO PARA JUGAR?
            </p>
            <div className="flex gap-2">
              <a
                href={ENLACE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="boton-vidrio rounded-full px-5 py-2 text-xs font-titulos font-bold text-azul-cielo inline-flex items-center gap-1.5"
              >
                Inscríbete
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Prueba social - Inferior derecho (glass) */}
      <motion.div
        className="absolute bottom-8 right-6 lg:right-8 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="vidrio rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="flex -space-x-2">
            {AVATARES_PLACEHOLDER.map((avatar) => (
              <div
                key={avatar.id}
                className="size-8 rounded-full border-2 border-fondo-principal/50 flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: avatar.color + '30', color: avatar.color }}
              >
                {avatar.id}
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-texto-principal font-titulos font-bold text-sm leading-tight">
              50+
            </p>
            <p className="text-texto-apagado text-[10px] uppercase tracking-wider">
              Jugadores
            </p>
          </div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 rounded-full border border-texto-apagado/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-texto-apagado/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Degradado inferior - fundido con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  )
}
