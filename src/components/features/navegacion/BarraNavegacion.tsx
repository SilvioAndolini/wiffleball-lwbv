'use client'

// Barra de navegación estilo GRIND
// Transparente en hero, blur + fondo al hacer scroll

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ENLACES_NAVEGACION, ENLACE_WHATSAPP } from '@/lib/utilidades/constantes'
import { LogoLiga } from '@/components/features/compartidos/LogoLiga'
import { EnlaceNavegacion } from './EnlaceNavegacion'

export function BarraNavegacion() {
  const rutaActual = usePathname()
  const [desplazado, setDesplazado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    function manejarScroll() {
      setDesplazado(window.scrollY > 50)
    }
    window.addEventListener('scroll', manejarScroll, { passive: true })
    return () => window.removeEventListener('scroll', manejarScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        desplazado
          ? 'bg-fondo-principal/80 backdrop-blur-xl border-b border-borde-sutil/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo tipográfico */}
          <LogoLiga tamano="sm" />

          {/* Links centrados - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {ENLACES_NAVEGACION.map(enlace => (
              <EnlaceNavegacion
                key={enlace.ruta}
                nombre={enlace.nombre}
                ruta={enlace.ruta}
                activo={rutaActual === enlace.ruta}
              />
            ))}
          </div>

          {/* Acción derecha - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={ENLACE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="boton-vidrio text-azul-cielo font-titulos font-bold text-xs tracking-wider px-5 py-2 rounded-full"
              >
                INSCRÍBETE →
              </Button>
            </a>
          </div>

          {/* Menú mobile */}
          <div className="md:hidden">
            <Sheet open={menuAbierto} onOpenChange={setMenuAbierto}>
              <SheetTrigger
                render={
                  <button
                    className="inline-flex items-center justify-center size-9 rounded-lg hover:bg-white/5 transition-colors"
                    aria-label="Abrir menú"
                  />
                }
              >
                <Menu className="size-5 text-texto-principal" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-fondo-principal/95 backdrop-blur-xl border-l border-borde-sutil/50 w-72 px-6 py-6"
              >
                <div className="flex flex-col gap-8 pt-8">
                  <LogoLiga tamano="md" conEnlace={false} />
                  <div className="h-px bg-borde-sutil" />
                  <nav className="flex flex-col gap-5">
                    {ENLACES_NAVEGACION.map(enlace => (
                      <Link
                        key={enlace.ruta}
                        href={enlace.ruta}
                        onClick={() => setMenuAbierto(false)}
                        className={`text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
                          rutaActual === enlace.ruta
                            ? 'text-azul-primario'
                            : 'text-texto-principal/80 hover:text-texto-principal'
                        }`}
                      >
                        {enlace.nombre}
                      </Link>
                    ))}
                  </nav>
                  <a
                    href={ENLACE_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuAbierto(false)}
                  >
                    <Button className="w-full boton-vidrio text-azul-cielo font-titulos font-bold text-sm tracking-wider rounded-full">
                      INSCRÍBETE →
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
