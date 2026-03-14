'use client'

// Vista previa de próximos juegos - diseño moderno estilo GRIND

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useJuegos } from '@/hooks/useJuegos'
import { formatearFechaCorta, formatearHora, calcularPorcentajeInscritos } from '@/lib/utilidades/formateadores'
import { RUTAS, ENLACE_WHATSAPP } from '@/lib/utilidades/constantes'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'
import { CargandoEsqueleto } from '@/components/features/compartidos/CargandoEsqueleto'

export function VistaJuegos() {
  const { juegos, cargando } = useJuegos({ limite: 3 })

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <ContenedorAnimado className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              PRÓXIMAMENTE
            </p>
            <h2 className="font-titulos text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
              <span className="text-texto-principal">PRÓXIMOS</span>
              <br />
              <span className="texto-gradiente">JUEGOS</span>
            </h2>
          </div>
          <Link href={RUTAS.CRONOGRAMA}>
            <Button
              variant="outline"
              className="vidrio text-texto-secundario hover:text-azul-primario rounded-full text-xs font-medium uppercase tracking-wider gap-2 px-6"
            >
              Ver todos
              <ArrowRight className="size-3.5" />
            </Button>
          </Link>
        </ContenedorAnimado>

        {/* Lista de juegos */}
        {cargando ? (
          <CargandoEsqueleto tipo="tarjeta" cantidad={3} />
        ) : (
          <div className="flex flex-col gap-4">
            {juegos.map((juego, indice) => {
              const porcentaje = calcularPorcentajeInscritos(juego.totalInscritos, juego.maxJugadores)
              const estaLleno = juego.totalInscritos >= juego.maxJugadores

              // Extraer día y mes de la fecha
              const fecha = new Date(juego.fecha)
              const dia = fecha.getDate()
              const mes = fecha.toLocaleDateString('es-VE', { month: 'short' }).toUpperCase()

              return (
                <motion.div
                  key={juego.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: indice * 0.1 }}
                  className="group bg-fondo-tarjeta/50 border border-borde-sutil/50 rounded-2xl p-5 md:p-6 hover:border-azul-primario/20 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    {/* Fecha visual */}
                    <div className="flex md:flex-col items-center md:items-center gap-2 md:gap-0 md:min-w-[70px]">
                      <span className="font-titulos font-bold text-3xl md:text-4xl text-azul-primario leading-none">
                        {dia}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-texto-apagado">
                        {mes}
                      </span>
                    </div>

                    {/* Separador vertical */}
                    <div className="hidden md:block w-px h-12 bg-borde-sutil/50" />

                    {/* Info del juego */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-titulos text-lg font-bold text-texto-principal group-hover:text-azul-primario transition-colors mb-2">
                        {juego.titulo}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs text-texto-apagado">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3" />
                          {juego.ubicacion}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3" />
                          {formatearHora(juego.horaInicio)}
                        </span>
                      </div>
                    </div>

                    {/* Equipos */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-titulos font-semibold text-azul-cielo">
                        {juego.equipoLocal || 'TBD'}
                      </span>
                      <span className="text-[10px] text-texto-apagado uppercase tracking-wider">vs</span>
                      <span className="font-titulos font-semibold text-gris-acento">
                        {juego.equipoVisitante || 'TBD'}
                      </span>
                    </div>

                    {/* Progreso + CTA */}
                    <div className="flex items-center gap-4">
                      {/* Barra de progreso circular mini */}
                      <div className="text-right hidden sm:block">
                        <p className="text-xs text-texto-apagado">
                          {juego.totalInscritos}/{juego.maxJugadores}
                        </p>
                        <div className="w-20 h-1 bg-fondo-elevado rounded-full overflow-hidden mt-1">
                          <motion.div
                            className={`h-full rounded-full ${estaLleno ? 'bg-gris-acento' : 'bg-azul-primario'}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${porcentaje}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                      </div>

                      <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`rounded-full text-xs font-titulos font-bold px-5 ${
                            estaLleno
                              ? 'bg-fondo-elevado text-texto-apagado cursor-not-allowed'
                              : 'boton-vidrio text-azul-cielo'
                          }`}
                          disabled={estaLleno}
                        >
                          {estaLleno ? 'LLENO' : 'APUNTARSE'}
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
