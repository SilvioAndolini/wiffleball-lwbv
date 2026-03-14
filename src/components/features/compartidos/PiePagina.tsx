// Pie de página moderno estilo GRIND

import Link from 'next/link'
import { ENLACES_NAVEGACION, METADATA_SITIO } from '@/lib/utilidades/constantes'

export function PiePagina() {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="border-t border-borde-sutil/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + Descripción */}
          <div className="flex items-center gap-6">
            <span className="font-titulos font-bold text-2xl text-texto-principal">
              LWBV
            </span>
            <div className="hidden sm:block w-px h-6 bg-borde-sutil/50" />
            <p className="hidden sm:block text-texto-apagado text-xs max-w-xs">
              {METADATA_SITIO.descripcion}
            </p>
          </div>

          {/* Links horizontales */}
          <nav className="flex flex-wrap gap-6">
            {ENLACES_NAVEGACION.map(enlace => (
              <Link
                key={enlace.ruta}
                href={enlace.ruta}
                className="text-xs uppercase tracking-[0.15em] text-texto-apagado hover:text-texto-principal transition-colors"
              >
                {enlace.nombre}
              </Link>
            ))}
          </nav>

          {/* Redes sociales */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-texto-apagado hover:text-azul-primario transition-colors"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="#"
              className="text-xs text-texto-apagado hover:text-azul-cielo transition-colors"
              aria-label="Twitter"
            >
              TW
            </a>
            <a
              href="#"
              className="text-xs text-texto-apagado hover:text-gris-acento transition-colors"
              aria-label="YouTube"
            >
              YT
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-borde-sutil/20">
          <p className="text-texto-apagado/50 text-[10px] uppercase tracking-[0.2em]">
            &copy; {anioActual} {METADATA_SITIO.titulo}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
