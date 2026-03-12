'use client'

// Barra de navegación principal de la aplicación
// Fija en la parte superior con fondo semi-transparente y backdrop-blur

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ENLACES_NAVEGACION, RUTAS } from '@/lib/utilidades/constantes'
import { LogoLiga } from '@/components/features/compartidos/LogoLiga'
import { EnlaceNavegacion } from './EnlaceNavegacion'

export function BarraNavegacion() {
  const rutaActual = usePathname()
  const [desplazado, setDesplazado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Detectar scroll para oscurecer el fondo
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        desplazado
          ? 'bg-fondo-principal/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-borde-sutil'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <LogoLiga tamano="sm" />

          {/* Enlaces de escritorio */}
          <div className="hidden md:flex items-center gap-6">
            {ENLACES_NAVEGACION.map(enlace => (
              <EnlaceNavegacion
                key={enlace.ruta}
                nombre={enlace.nombre}
                ruta={enlace.ruta}
                activo={rutaActual === enlace.ruta}
              />
            ))}
          </div>

          {/* Botón CTA de escritorio */}
          <div className="hidden md:block">
            <Link href={RUTAS.INSCRIPCIONES}>
              <Button
                className="bg-amarillo-neon text-fondo-principal font-titulos font-bold hover:bg-amarillo-brillante transition-all hover:shadow-lg hover:shadow-amarillo-neon/25"
              >
                INSCRÍBETE
              </Button>
            </Link>
          </div>

          {/* Menú mobile */}
          <div className="md:hidden">
            <Sheet open={menuAbierto} onOpenChange={setMenuAbierto}>
              <SheetTrigger
                render={
                  <button
                    className="inline-flex items-center justify-center size-8 rounded-lg hover:bg-muted/50 transition-colors"
                    aria-label="Abrir menú"
                  />
                }
              >
                <Menu className="h-6 w-6 text-texto-principal" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-fondo-principal border-l border-borde-sutil w-72"
              >
                <div className="flex flex-col gap-6 mt-8">
                  {/* Logo en menú mobile */}
                  <div className="px-2">
                    <LogoLiga tamano="md" conEnlace={false} />
                  </div>

                  {/* Separador */}
                  <div className="h-px gradiente-venezuela" />

                  {/* Enlaces */}
                  <nav className="flex flex-col gap-4 px-2">
                    {ENLACES_NAVEGACION.map(enlace => (
                      <Link
                        key={enlace.ruta}
                        href={enlace.ruta}
                        onClick={() => setMenuAbierto(false)}
                        className={`text-lg font-titulos font-medium py-2 transition-colors ${
                          rutaActual === enlace.ruta
                            ? 'text-amarillo-neon'
                            : 'text-texto-principal hover:text-amarillo-neon'
                        }`}
                      >
                        {enlace.nombre}
                      </Link>
                    ))}
                  </nav>

                  {/* Botón CTA mobile */}
                  <div className="px-2">
                    <Link
                      href={RUTAS.INSCRIPCIONES}
                      onClick={() => setMenuAbierto(false)}
                      className="block"
                    >
                      <Button className="w-full bg-amarillo-neon text-fondo-principal font-titulos font-bold text-lg py-6 hover:bg-amarillo-brillante">
                        INSCRÍBETE
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
