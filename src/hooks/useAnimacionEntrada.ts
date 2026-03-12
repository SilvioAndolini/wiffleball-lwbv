'use client'

// Hook personalizado para detectar cuándo un elemento entra en el viewport
// Útil para activar animaciones de Framer Motion al hacer scroll

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface OpcionesAnimacion {
  /** Margen alrededor del elemento para activar antes/después */
  margen?: `${number}px` | `${number}%` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
  /** Si la animación debe ejecutarse solo una vez */
  soloUnaVez?: boolean
  /** Porcentaje del elemento que debe ser visible (0-1) */
  cantidad?: number
}

export function useAnimacionEntrada(opciones: OpcionesAnimacion = {}) {
  const {
    margen = '-100px',
    soloUnaVez = true,
    cantidad = 0.2,
  } = opciones

  const referencia = useRef(null)
  const enVista = useInView(referencia, {
    once: soloUnaVez,
    margin: margen,
    amount: cantidad,
  })

  return { referencia, enVista }
}
