'use client'

// Componente wrapper que anima sus hijos al entrar en el viewport
// Reutilizable en todas las páginas para animaciones de scroll

import { motion } from 'framer-motion'
import { useAnimacionEntrada } from '@/hooks/useAnimacionEntrada'
import {
  variantesEntradaDesdeAbajo,
  variantesEntradaDesdeLado,
  variantesEntradaDesdeDerecha,
  variantesEscala,
  variantesAparicion,
} from '@/lib/animaciones/variantes'
import type { ReactNode } from 'react'

type TipoVariante = 'desde-abajo' | 'desde-izquierda' | 'desde-derecha' | 'escala' | 'aparicion'

interface PropiedadesContenedor {
  children: ReactNode
  variante?: TipoVariante
  retraso?: number
  className?: string
  como?: keyof typeof motion
}

const MAPA_VARIANTES = {
  'desde-abajo': variantesEntradaDesdeAbajo,
  'desde-izquierda': variantesEntradaDesdeLado,
  'desde-derecha': variantesEntradaDesdeDerecha,
  'escala': variantesEscala,
  'aparicion': variantesAparicion,
}

export function ContenedorAnimado({
  children,
  variante = 'desde-abajo',
  retraso = 0,
  className = '',
}: PropiedadesContenedor) {
  const { referencia, enVista } = useAnimacionEntrada()
  const variantesSeleccionadas = MAPA_VARIANTES[variante]

  return (
    <motion.div
      ref={referencia}
      initial="oculto"
      animate={enVista ? 'visible' : 'oculto'}
      variants={variantesSeleccionadas}
      transition={{ delay: retraso }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
