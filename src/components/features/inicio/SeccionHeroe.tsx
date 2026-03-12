'use client'

// Sección Hero principal con efecto parallax
// Full viewport con título animado y CTAs

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RUTAS } from '@/lib/utilidades/constantes'

// Palabras del título para animación escalonada
const PALABRAS_TITULO = ['LIGA', 'DE', 'WIFFLE', 'BALL', 'VENEZOLANA']

export function SeccionHeroe() {
  const referencia = useRef(null)
  const { scrollYProgress } = useScroll({
    target: referencia,
    offset: ['start start', 'end start'],
  })

  // Efecto parallax: el fondo se mueve más lento que el scroll
  const yFondo = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacidadContenido = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const escalaContenido = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={referencia}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      <motion.div
        style={{ y: yFondo }}
        className="absolute inset-0 gradiente-fondo"
      >
        {/* Partículas decorativas */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#FFD700', '#00BFFF', '#FF3B3B'][i % 3],
                opacity: 0.3,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-fondo-principal/40" />

      {/* Contenido */}
      <motion.div
        style={{ opacity: opacidadContenido, scale: escalaContenido }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Título principal con animación escalonada */}
        <motion.h1
          className="font-titulos font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6"
          initial="oculto"
          animate="visible"
          variants={{
            oculto: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {PALABRAS_TITULO.map((palabra, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 md:mr-4 ${
                palabra === 'WIFFLE' || palabra === 'BALL'
                  ? 'texto-gradiente-venezuela'
                  : 'text-texto-principal'
              }`}
              variants={{
                oculto: { opacity: 0, y: 50, rotateX: -90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              {palabra}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-texto-secundario text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Vive la pasión del deporte. Únete a la liga más emocionante de Venezuela.
        </motion.p>

        {/* Botones CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Link href={RUTAS.CRONOGRAMA}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amarillo-neon text-amarillo-neon bg-transparent hover:bg-amarillo-neon hover:text-fondo-principal font-titulos font-bold text-lg px-8 py-6 transition-all hover:shadow-lg hover:shadow-amarillo-neon/25"
            >
              VER CRONOGRAMA
            </Button>
          </Link>
          <Link href={RUTAS.INSCRIPCIONES}>
            <Button
              size="lg"
              className="bg-amarillo-neon text-fondo-principal font-titulos font-bold text-lg px-8 py-6 hover:bg-amarillo-brillante transition-all animate-pulso-neon"
            >
              INSCRÍBETE AHORA
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-texto-apagado flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-amarillo-neon"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Línea inferior gradiente Venezuela */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradiente-venezuela" />
    </section>
  )
}
