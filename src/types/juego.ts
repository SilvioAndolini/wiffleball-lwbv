// Tipos para la entidad Juego (partidos de la liga)

export type EstadoJuego = 'programado' | 'en_curso' | 'finalizado' | 'cancelado' | 'pospuesto'

export interface Juego {
  id: string
  titulo: string
  descripcion: string | null
  fecha: string
  horaInicio: string
  horaFin: string | null
  ubicacion: string
  latitud: number | null
  longitud: number | null
  equipoLocalId: string | null
  equipoVisitanteId: string | null
  marcadorLocal: number
  marcadorVisitante: number
  estado: EstadoJuego
  maxJugadores: number
  creadoPor: string | null
  creadoEn: string
  actualizadoEn: string
}

// Juego con información adicional de equipos e inscritos
export interface JuegoConDetalles extends Juego {
  equipoLocal: string | null
  equipoVisitante: string | null
  totalInscritos: number
}

// Datos para insertar un nuevo juego
export interface InsertarJuego {
  titulo: string
  descripcion?: string
  fecha: string
  horaInicio: string
  horaFin?: string
  ubicacion: string
  latitud?: number
  longitud?: number
  equipoLocalId?: string
  equipoVisitanteId?: string
  maxJugadores?: number
}
