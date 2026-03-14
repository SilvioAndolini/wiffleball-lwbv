'use client'

// Hero compacto reutilizable para páginas secundarias
// Estilo GRIND con título gigante y texto de fondo

import { motion } from 'framer-motion'

interface PropiedadesHero {
  etiqueta?: string
  titulo: string
  tituloColor?: string
  subtitulo?: string
}

export function HeroPagina({ etiqueta, titulo, tituloColor, subtitulo }: PropiedadesHero) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 hero-pagina" />

      {/* Texto de fondo decorativo */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none pr-[5vw]">
        <span
          className="texto-fondo-3d font-titulos font-bold leading-none select-none whitespace-nowrap opacity-60"
          style={{ fontSize: 'clamp(80px, 12vw, 250px)' }}
        >
          {titulo}
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {etiqueta && (
          <motion.p
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {etiqueta}
          </motion.p>
        )}

        <motion.h1
          className="font-titulos text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {tituloColor ? (
            <>
              <span className="text-texto-principal">{titulo.replace(tituloColor, '')}</span>
              <span className="texto-gradiente">{tituloColor}</span>
            </>
          ) : (
            <span className="text-texto-principal">{titulo}</span>
          )}
        </motion.h1>

        {subtitulo && (
          <motion.p
            className="text-texto-secundario/70 text-sm md:text-base max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {subtitulo}
          </motion.p>
        )}
      </div>
    </section>
  )
}
