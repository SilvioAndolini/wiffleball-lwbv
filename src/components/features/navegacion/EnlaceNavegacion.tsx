'use client'

// Enlace de navegación minimalista estilo GRIND

import Link from 'next/link'

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
      className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
        activo ? 'text-azul-primario' : 'text-texto-principal/80 hover:text-texto-principal'
      }`}
    >
      {nombre}
    </Link>
  )
}
