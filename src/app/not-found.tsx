// Página 404 personalizada

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RUTAS } from '@/lib/utilidades/constantes'

export default function NoEncontrado() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fondo-principal px-4">
      <div className="text-center max-w-lg">
        {/* Número 404 gigante con efecto */}
        <h1 className="font-titulos text-[10rem] md:text-[14rem] font-bold leading-none texto-gradiente opacity-80">
          404
        </h1>

        {/* Mensaje */}
        <h2 className="font-titulos text-2xl md:text-3xl font-bold text-texto-principal mb-4 -mt-6">
          ¡Se fue de jonrón!
        </h2>
        <p className="text-texto-secundario mb-8">
          La página que buscas no existe o fue movida a otro lugar.
          Pero no te preocupes, siempre puedes volver al campo de juego.
        </p>

        {/* Botón para volver al inicio */}
        <Link href={RUTAS.INICIO}>
          <Button
            size="lg"
            className="boton-vidrio text-azul-cielo font-titulos font-bold"
          >
            VOLVER AL INICIO
          </Button>
        </Link>
      </div>
    </div>
  )
}
