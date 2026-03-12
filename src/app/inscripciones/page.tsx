// Página de Inscripciones - Formulario para unirse a la liga

import { Suspense } from 'react'
import { FormularioInscripcion } from '@/components/features/inscripciones/FormularioInscripcion'

export const metadata = {
  title: 'Inscripciones',
  description: 'Inscríbete en los próximos juegos de la Liga de Wiffle Ball Venezolana. ¡Únete a la acción!',
}

export default function PaginaInscripciones() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-titulos text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-texto-principal">INSCR</span>
            <span className="texto-gradiente-venezuela">ÍBETE</span>
          </h1>
          <p className="text-texto-secundario text-lg max-w-xl mx-auto">
            Completa el formulario para inscribirte en un juego.
            No importa tu nivel, aquí todos son bienvenidos.
          </p>
        </div>

        {/* Layout: Formulario + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario (2/3 del ancho) */}
          <div className="lg:col-span-2">
            <Suspense fallback={
              <div className="bg-fondo-tarjeta rounded-xl p-8 animate-pulse">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="h-10 bg-fondo-elevado rounded" />
                  ))}
                </div>
              </div>
            }>
              <FormularioInscripcion />
            </Suspense>
          </div>

          {/* Información lateral (1/3 del ancho) */}
          <div className="space-y-6">
            {/* Beneficios */}
            <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6">
              <h3 className="font-titulos text-xl font-bold text-amarillo-neon mb-4">
                ¿Por qué unirte?
              </h3>
              <ul className="space-y-3 text-texto-secundario text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amarillo-neon mt-0.5">⚡</span>
                  <span>Juega wiffle ball competitivo y recreativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azul-neon mt-0.5">🤝</span>
                  <span>Conoce gente apasionada por el deporte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rojo-neon mt-0.5">🏆</span>
                  <span>Compite por premios y reconocimientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amarillo-neon mt-0.5">🎉</span>
                  <span>Participa en eventos especiales y torneos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-azul-neon mt-0.5">📈</span>
                  <span>Mejora tus habilidades con jugadores de todos los niveles</span>
                </li>
              </ul>
            </div>

            {/* Requisitos */}
            <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6">
              <h3 className="font-titulos text-xl font-bold text-texto-principal mb-4">
                Requisitos
              </h3>
              <ul className="space-y-2 text-texto-secundario text-sm">
                <li>• Mayor de 16 años</li>
                <li>• Llevar ropa deportiva cómoda</li>
                <li>• Actitud deportiva y fair play</li>
                <li>• No se necesita equipo propio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
