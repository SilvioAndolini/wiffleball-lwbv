// Pie de página de la aplicación

import Link from 'next/link'
import { ENLACES_NAVEGACION, METADATA_SITIO } from '@/lib/utilidades/constantes'

export function PiePagina() {
  const anioActual = new Date().getFullYear()

  return (
    <footer className="relative mt-20">
      {/* Línea decorativa gradiente Venezuela */}
      <div className="h-1 gradiente-venezuela" />

      <div className="bg-fondo-tarjeta border-t border-borde-sutil">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Sobre la liga */}
            <div>
              <h3 className="font-titulos text-xl font-bold text-amarillo-neon mb-4">
                {METADATA_SITIO.titulo}
              </h3>
              <p className="text-texto-secundario text-sm leading-relaxed">
                {METADATA_SITIO.descripcion}
              </p>
            </div>

            {/* Columna 2: Links rápidos */}
            <div>
              <h3 className="font-titulos text-lg font-bold text-texto-principal mb-4">
                Enlaces Rápidos
              </h3>
              <nav className="flex flex-col gap-2">
                {ENLACES_NAVEGACION.map(enlace => (
                  <Link
                    key={enlace.ruta}
                    href={enlace.ruta}
                    className="text-texto-secundario hover:text-amarillo-neon transition-colors text-sm"
                  >
                    {enlace.nombre}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h3 className="font-titulos text-lg font-bold text-texto-principal mb-4">
                Contacto
              </h3>
              <div className="space-y-2 text-sm text-texto-secundario">
                <p>contacto@wiffleball.ve</p>
                <p>Caracas, Venezuela</p>
                <div className="flex gap-4 mt-4">
                  {/* Iconos de redes sociales como texto por ahora */}
                  <a
                    href="#"
                    className="hover:text-amarillo-neon transition-colors"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="hover:text-azul-neon transition-colors"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="hover:text-rojo-neon transition-colors"
                    aria-label="YouTube"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-borde-sutil text-center">
            <p className="text-texto-apagado text-sm">
              &copy; {anioActual} {METADATA_SITIO.titulo}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
