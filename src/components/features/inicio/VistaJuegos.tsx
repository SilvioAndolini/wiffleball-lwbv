'use client'

// Vista previa de los próximos juegos en la página de inicio
// Muestra los 3 próximos juegos con animación escalonada

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useJuegos } from '@/hooks/useJuegos'
import { formatearFechaCorta, formatearHora, calcularPorcentajeInscritos } from '@/lib/utilidades/formateadores'
import { RUTAS } from '@/lib/utilidades/constantes'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'
import { CargandoEsqueleto } from '@/components/features/compartidos/CargandoEsqueleto'
import {
  variantesContenedorEscalonado,
  variantesElementoEscalonado,
} from '@/lib/animaciones/variantes'

export function VistaJuegos() {
  const { juegos, cargando } = useJuegos({ limite: 3 })

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <ContenedorAnimado className="text-center mb-12">
          <h2 className="font-titulos text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-texto-principal">PRÓXIMOS </span>
            <span className="texto-gradiente-venezuela">JUEGOS</span>
          </h2>
          <p className="text-texto-secundario mt-4 max-w-xl mx-auto">
            No te pierdas ningún partido. Inscríbete y forma parte de la acción.
          </p>
        </ContenedorAnimado>

        {/* Grid de tarjetas */}
        {cargando ? (
          <CargandoEsqueleto tipo="tarjeta" cantidad={3} />
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={variantesContenedorEscalonado}
          >
            {juegos.map(juego => {
              const porcentaje = calcularPorcentajeInscritos(juego.totalInscritos, juego.maxJugadores)
              const estaLleno = juego.totalInscritos >= juego.maxJugadores

              return (
                <motion.div
                  key={juego.id}
                  variants={variantesElementoEscalonado}
                  className="bg-fondo-tarjeta rounded-xl border border-borde-sutil p-6 hover:border-amarillo-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-amarillo-neon/5 group"
                >
                  {/* Encabezado: Estado y fecha */}
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-amarillo-neon/10 text-amarillo-neon border-amarillo-neon/30 font-titulos">
                      {juego.estado.toUpperCase()}
                    </Badge>
                    <span className="text-texto-apagado text-sm font-titulos">
                      {formatearFechaCorta(juego.fecha)}
                    </span>
                  </div>

                  {/* Título del juego */}
                  <h3 className="font-titulos text-xl font-bold text-texto-principal mb-3 group-hover:text-amarillo-neon transition-colors">
                    {juego.titulo}
                  </h3>

                  {/* Equipos */}
                  <div className="text-center py-3 mb-3">
                    <span className="text-azul-neon font-titulos font-semibold">
                      {juego.equipoLocal || 'Por definir'}
                    </span>
                    <span className="text-texto-apagado mx-3 text-sm">vs</span>
                    <span className="text-rojo-neon font-titulos font-semibold">
                      {juego.equipoVisitante || 'Por definir'}
                    </span>
                  </div>

                  {/* Ubicación y hora */}
                  <div className="space-y-1 mb-4 text-sm text-texto-secundario">
                    <p>📍 {juego.ubicacion}</p>
                    <p>🕐 {formatearHora(juego.horaInicio)}</p>
                  </div>

                  {/* Barra de progreso de inscritos */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-texto-apagado mb-1">
                      <span>{juego.totalInscritos}/{juego.maxJugadores} inscritos</span>
                      <span>{porcentaje}%</span>
                    </div>
                    <div className="h-2 bg-fondo-elevado rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          estaLleno ? 'bg-rojo-neon' : 'bg-amarillo-neon'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${porcentaje}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Botón */}
                  <Link href={`${RUTAS.INSCRIPCIONES}?juego=${juego.id}`}>
                    <Button
                      className={`w-full font-titulos font-bold ${
                        estaLleno
                          ? 'bg-fondo-elevado text-texto-apagado cursor-not-allowed'
                          : 'bg-transparent border-2 border-amarillo-neon text-amarillo-neon hover:bg-amarillo-neon hover:text-fondo-principal'
                      }`}
                      disabled={estaLleno}
                    >
                      {estaLleno ? 'LLENO' : 'APUNTARSE'}
                    </Button>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Botón ver todos */}
        <ContenedorAnimado className="text-center mt-10">
          <Link href={RUTAS.CRONOGRAMA}>
            <Button
              variant="outline"
              size="lg"
              className="border-borde-sutil text-texto-secundario hover:border-amarillo-neon hover:text-amarillo-neon font-titulos"
            >
              VER TODOS LOS JUEGOS →
            </Button>
          </Link>
        </ContenedorAnimado>
      </div>
    </section>
  )
}
