// Página de Inscripciones - Formulario para unirse a la liga

import { Suspense } from 'react'
import { HeroPagina } from '@/components/features/compartidos/HeroPagina'
import { FormularioInscripcion } from '@/components/features/inscripciones/FormularioInscripcion'

export const metadata = {
  title: 'Inscripciones',
  description: 'Inscríbete en los próximos juegos de la Liga de Wiffle Ball Venezolana. ¡Únete a la acción!',
}

export default function PaginaInscripciones() {
  return (
    <>
      <HeroPagina
        etiqueta="ÚNETE"
        titulo="INSCRÍBETE"
        tituloColor="BETE"
        subtitulo="Completa el formulario para inscribirte en un juego. No importa tu nivel, aquí todos son bienvenidos."
      />
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario */}
            <div className="lg:col-span-2">
              <Suspense fallback={
                <div className="bg-fondo-tarjeta/50 border border-borde-sutil/50 rounded-2xl p-8 animate-pulse">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-10 bg-fondo-elevado rounded-xl" />
                    ))}
                  </div>
                </div>
              }>
                <FormularioInscripcion />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Beneficios */}
              <div className="vidrio rounded-2xl p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
                  BENEFICIOS
                </p>
                <h3 className="font-titulos text-lg font-bold text-texto-principal mb-4">
                  ¿Por qué unirte?
                </h3>
                <ul className="space-y-3 text-texto-secundario/70 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-azul-primario mt-1.5 flex-shrink-0" />
                    <span>Juega wiffle ball competitivo y recreativo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-azul-cielo mt-1.5 flex-shrink-0" />
                    <span>Conoce gente apasionada por el deporte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-gris-acento mt-1.5 flex-shrink-0" />
                    <span>Compite por premios y reconocimientos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-azul-primario mt-1.5 flex-shrink-0" />
                    <span>Participa en eventos especiales y torneos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="size-1.5 rounded-full bg-azul-cielo mt-1.5 flex-shrink-0" />
                    <span>Mejora tus habilidades con jugadores de todos los niveles</span>
                  </li>
                </ul>
              </div>

              {/* Requisitos */}
              <div className="vidrio rounded-2xl p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-texto-apagado mb-4">
                  REQUISITOS
                </p>
                <ul className="space-y-2 text-texto-secundario/70 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-texto-apagado">—</span>
                    <span>Mayor de 16 años</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-texto-apagado">—</span>
                    <span>Llevar ropa deportiva cómoda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-texto-apagado">—</span>
                    <span>Actitud deportiva y fair play</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-texto-apagado">—</span>
                    <span>No se necesita equipo propio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
