'use client'

// Lista de juegos con filtros por estado

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useJuegos } from '@/hooks/useJuegos'
import { TarjetaJuego } from './TarjetaJuego'
import { CargandoEsqueleto } from '@/components/features/compartidos/CargandoEsqueleto'
import { variantesContenedorEscalonado, variantesElementoEscalonado } from '@/lib/animaciones/variantes'
import type { EstadoJuego } from '@/types/juego'

// Opciones de filtro
const FILTROS: { etiqueta: string; valor: EstadoJuego | 'todos' }[] = [
  { etiqueta: 'Todos', valor: 'todos' },
  { etiqueta: 'Programados', valor: 'programado' },
  { etiqueta: 'En Curso', valor: 'en_curso' },
  { etiqueta: 'Finalizados', valor: 'finalizado' },
]

export function ListaJuegos() {
  const [filtroActivo, setFiltroActivo] = useState<EstadoJuego | 'todos'>('todos')
  const { juegos, cargando, error } = useJuegos({ limite: 20 })

  // Filtrar juegos localmente
  const juegosFiltrados = filtroActivo === 'todos'
    ? juegos
    : juegos.filter(j => j.estado === filtroActivo)

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTROS.map(filtro => (
          <button
            key={filtro.valor}
            onClick={() => setFiltroActivo(filtro.valor)}
            className="transition-all"
          >
            <Badge
              className={`font-titulos text-sm px-4 py-1.5 cursor-pointer transition-all ${
                filtroActivo === filtro.valor
                  ? 'bg-azul-primario text-white border-azul-primario'
                  : 'bg-fondo-elevado text-texto-secundario border-borde-sutil hover:border-azul-primario/50'
              }`}
            >
              {filtro.etiqueta}
            </Badge>
          </button>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="text-center py-8 px-4 bg-gris-acento/5 border border-gris-acento/20 rounded-xl mb-6">
          <p className="text-gris-acento text-sm">{error}</p>
        </div>
      )}

      {/* Contenido */}
      {cargando ? (
        <CargandoEsqueleto tipo="tarjeta" cantidad={6} />
      ) : juegosFiltrados.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4 opacity-30">⚾</div>
          <h3 className="font-titulos text-xl font-bold text-texto-principal mb-2">
            No hay juegos
          </h3>
          <p className="text-texto-secundario">
            {filtroActivo === 'todos'
              ? 'Aún no hay juegos programados. ¡Pronto habrá novedades!'
              : `No hay juegos con estado "${filtroActivo}".`}
          </p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="oculto"
          animate="visible"
          variants={variantesContenedorEscalonado}
        >
          {juegosFiltrados.map(juego => (
            <motion.div key={juego.id} variants={variantesElementoEscalonado}>
              <TarjetaJuego juego={juego} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
