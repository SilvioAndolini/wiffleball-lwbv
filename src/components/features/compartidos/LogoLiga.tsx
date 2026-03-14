'use client'

// Logo tipográfico de la Liga Venezolana de Wiffleball

import Link from 'next/link'

interface PropiedadesLogo {
  tamano?: 'sm' | 'md' | 'lg'
  conEnlace?: boolean
}

const ESTILOS_TAMANO = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
}

export function LogoLiga({ tamano = 'md', conEnlace = true }: PropiedadesLogo) {
  const contenido = (
    <span className={`font-titulos font-bold tracking-tight ${ESTILOS_TAMANO[tamano]} text-texto-principal hover:text-azul-primario transition-colors`}>
      LWBV
    </span>
  )

  if (conEnlace) {
    return (
      <Link href="/" aria-label="Ir al inicio">
        {contenido}
      </Link>
    )
  }

  return contenido
}
