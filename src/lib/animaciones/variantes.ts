// Variantes de animación reutilizables para Framer Motion

import type { Variants } from 'framer-motion'

// Entrada desde abajo (para secciones completas)
export const variantesEntradaDesdeAbajo: Variants = {
  oculto: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Entrada desde la izquierda (para textos e imágenes)
export const variantesEntradaDesdeLado: Variants = {
  oculto: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Entrada desde la derecha
export const variantesEntradaDesdeDerecha: Variants = {
  oculto: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Contenedor con hijos escalonados (stagger)
export const variantesContenedorEscalonado: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

// Elemento individual dentro de un contenedor escalonado
export const variantesElementoEscalonado: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

// Efecto de escala (para tarjetas y botones)
export const variantesEscala: Variants = {
  oculto: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Efecto de aparición suave (para fondos y overlays)
export const variantesAparicion: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
}
