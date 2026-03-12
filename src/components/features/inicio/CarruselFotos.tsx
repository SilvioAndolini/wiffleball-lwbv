'use client'

// Carrusel de fotos estilo showreel
// Se desplaza horizontalmente al hacer scroll vertical

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

// Fotos de ejemplo (usar placeholders hasta tener fotos reales)
const FOTOS = [
  { id: 1, titulo: 'Inauguración', descripcion: 'El inicio de una nueva temporada' },
  { id: 2, titulo: 'Clásico Capitalino', descripcion: 'El enfrentamiento más esperado' },
  { id: 3, titulo: 'Doble Jornada', descripcion: 'Noche de wiffle ball bajo las luces' },
  { id: 4, titulo: 'Copa Venezuela', descripcion: 'El torneo nacional más importante' },
  { id: 5, titulo: 'Celebración', descripcion: 'Momentos de victoria y unión' },
  { id: 6, titulo: 'Entrenamiento', descripcion: 'Preparación para la victoria' },
]

// Colores de borde rotativos para cada foto
const COLORES_BORDE = ['#FFD700', '#00BFFF', '#FF3B3B', '#FFEA00', '#0077B6', '#E63946']

export function CarruselFotos() {
  const contenedorRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contenedorRef,
    offset: ['start end', 'end start'],
  })

  // Mapear el scroll vertical a desplazamiento horizontal
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-60%'])

  return (
    <section ref={contenedorRef} className="py-20 overflow-hidden">
      {/* Título de sección */}
      <ContenedorAnimado className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-titulos text-4xl md:text-5xl lg:text-6xl font-bold text-centro">
          <span className="text-texto-principal">NUESTROS </span>
          <span className="texto-gradiente-venezuela">MOMENTOS</span>
        </h2>
        <p className="text-texto-secundario text-center mt-4 max-w-xl mx-auto">
          Revive los mejores momentos de la liga a través de nuestras fotos.
        </p>
      </ContenedorAnimado>

      {/* Carrusel horizontal */}
      <motion.div style={{ x }} className="flex gap-6 px-8">
        {FOTOS.map((foto, indice) => (
          <motion.div
            key={foto.id}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-96 aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Fondo placeholder */}
            <div
              className="absolute inset-0 bg-fondo-elevado flex items-center justify-center"
              style={{
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: COLORES_BORDE[indice % COLORES_BORDE.length],
                borderRadius: '0.75rem',
              }}
            >
              <div className="text-center p-6">
                <div
                  className="text-6xl mb-4 opacity-30"
                  style={{ color: COLORES_BORDE[indice % COLORES_BORDE.length] }}
                >
                  ⚾
                </div>
                <p className="text-texto-apagado text-sm">
                  Foto {foto.id} - Reemplazar
                </p>
              </div>
            </div>

            {/* Overlay con información al hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-fondo-principal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-xl">
              <div>
                <h3 className="font-titulos text-xl font-bold text-amarillo-neon">
                  {foto.titulo}
                </h3>
                <p className="text-texto-secundario text-sm mt-1">
                  {foto.descripcion}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
