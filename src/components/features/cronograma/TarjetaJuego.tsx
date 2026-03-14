'use client'

// Tarjeta individual de juego estilo deportivo

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatearFechaCorta, formatearHora, calcularPorcentajeInscritos } from '@/lib/utilidades/formateadores'
import { ENLACE_WHATSAPP } from '@/lib/utilidades/constantes'
import type { JuegoConDetalles, EstadoJuego } from '@/types/juego'

// Colores por estado del juego
const COLORES_ESTADO: Record<EstadoJuego, string> = {
  programado: 'bg-azul-primario/10 text-azul-primario border-azul-primario/30',
  en_curso: 'bg-azul-cielo/10 text-azul-cielo border-azul-cielo/30',
  finalizado: 'bg-green-500/10 text-green-400 border-green-500/30',
  cancelado: 'bg-gris-acento/10 text-gris-acento border-gris-acento/30',
  pospuesto: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
}

const ETIQUETAS_ESTADO: Record<EstadoJuego, string> = {
  programado: 'PROGRAMADO',
  en_curso: 'EN CURSO',
  finalizado: 'FINALIZADO',
  cancelado: 'CANCELADO',
  pospuesto: 'POSPUESTO',
}

interface PropiedadesTarjeta {
  juego: JuegoConDetalles
}

export function TarjetaJuego({ juego }: PropiedadesTarjeta) {
  const porcentaje = calcularPorcentajeInscritos(juego.totalInscritos, juego.maxJugadores)
  const estaLleno = juego.totalInscritos >= juego.maxJugadores
  const esInscribible = juego.estado === 'programado' && !estaLleno

  return (
    <motion.div
      className="bg-fondo-tarjeta rounded-xl border border-borde-sutil p-6 hover:border-azul-primario/50 transition-all duration-300 hover:shadow-lg hover:shadow-azul-primario/5 group flex flex-col"
      whileHover={{ y: -4 }}
    >
      {/* Encabezado: Estado y fecha */}
      <div className="flex justify-between items-center mb-4">
        <Badge className={`font-titulos text-xs ${COLORES_ESTADO[juego.estado]}`}>
          {ETIQUETAS_ESTADO[juego.estado]}
        </Badge>
        <span className="text-texto-apagado text-sm font-titulos">
          {formatearFechaCorta(juego.fecha)}
        </span>
      </div>

      {/* Título del juego */}
      <h3 className="font-titulos text-xl font-bold text-texto-principal mb-2 group-hover:text-azul-primario transition-colors">
        {juego.titulo}
      </h3>

      {/* Descripción */}
      {juego.descripcion && (
        <p className="text-texto-secundario text-sm mb-3 line-clamp-2">
          {juego.descripcion}
        </p>
      )}

      {/* Equipos VS */}
      <div className="text-center py-4 mb-3 bg-fondo-elevado/50 rounded-lg">
        <span className="text-azul-cielo font-titulos font-semibold text-base">
          {juego.equipoLocal || 'Por definir'}
        </span>
        <span className="text-texto-apagado mx-3 text-xs uppercase tracking-wider">vs</span>
        <span className="text-gris-acento font-titulos font-semibold text-base">
          {juego.equipoVisitante || 'Por definir'}
        </span>
      </div>

      {/* Ubicación y hora */}
      <div className="space-y-1.5 mb-4 text-sm text-texto-secundario">
        <p className="flex items-center gap-2">
          <span>📍</span>
          <span>{juego.ubicacion}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🕐</span>
          <span>{formatearHora(juego.horaInicio)}</span>
          {juego.horaFin && (
            <span className="text-texto-apagado">- {formatearHora(juego.horaFin)}</span>
          )}
        </p>
      </div>

      {/* Barra de progreso de inscritos */}
      <div className="mb-4 mt-auto">
        <div className="flex justify-between text-xs text-texto-apagado mb-1.5">
          <span>{juego.totalInscritos}/{juego.maxJugadores} inscritos</span>
          <span>{porcentaje}%</span>
        </div>
        <div className="h-2 bg-fondo-elevado rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${
              estaLleno ? 'bg-gris-acento' : porcentaje > 75 ? 'bg-azul-claro' : 'bg-azul-primario'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: `${porcentaje}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>

      {/* Botón de acción */}
      {esInscribible ? (
        <a href={ENLACE_WHATSAPP} target="_blank" rel="noopener noreferrer">
          <Button
            className="w-full boton-vidrio text-azul-cielo font-titulos font-bold"
          >
            APUNTARSE ⚡
          </Button>
        </a>
      ) : (
        <Button
          className="w-full bg-fondo-elevado text-texto-apagado font-titulos font-bold cursor-not-allowed"
          disabled
        >
          {estaLleno ? 'LLENO' : ETIQUETAS_ESTADO[juego.estado]}
        </Button>
      )}
    </motion.div>
  )
}
