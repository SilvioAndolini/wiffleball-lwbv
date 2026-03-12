'use client'

// Componente del logo de la Liga de Wiffle Ball Venezolana

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PropiedadesLogo {
  tamano?: 'sm' | 'md' | 'lg'
  conTexto?: boolean
  conEnlace?: boolean
}

const TAMANOS = {
  sm: 32,
  md: 48,
  lg: 64,
}

export function LogoLiga({ tamano = 'md', conTexto = true, conEnlace = true }: PropiedadesLogo) {
  const dimension = TAMANOS[tamano]

  const contenido = (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/imagenes/logo-placeholder.svg"
        alt="Logo Liga de Wiffle Ball Venezolana"
        width={dimension}
        height={dimension}
        className="rounded-full"
        priority
      />
      {conTexto && (
        <div className="flex flex-col">
          <span className="font-titulos font-bold text-amarillo-neon leading-tight text-sm md:text-base">
            LWBV
          </span>
          <span className="text-texto-secundario text-[10px] md:text-xs leading-tight hidden sm:block">
            Wiffle Ball Venezuela
          </span>
        </div>
      )}
    </motion.div>
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
