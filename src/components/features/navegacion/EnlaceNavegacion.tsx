'use client'

// Componente de enlace individual con animación de underline

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PropiedadesEnlace {
  nombre: string
  ruta: string
  activo: boolean
  onClick?: () => void
}

export function EnlaceNavegacion({ nombre, ruta, activo, onClick }: PropiedadesEnlace) {
  return (
    <Link
      href={ruta}
      onClick={onClick}
      className="relative py-2 group"
    >
      <span
        className={`text-sm font-medium transition-colors ${
          activo ? 'text-amarillo-neon' : 'text-texto-principal hover:text-amarillo-neon'
        }`}
      >
        {nombre}
      </span>
      {/* Underline animado */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-amarillo-neon"
        initial={{ width: activo ? '100%' : '0%' }}
        animate={{ width: activo ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}
