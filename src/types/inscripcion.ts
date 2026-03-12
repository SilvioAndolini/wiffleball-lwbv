// Tipos para la entidad Inscripción

export type EstadoInscripcion = 'pendiente' | 'confirmada' | 'rechazada' | 'cancelada'
export type NivelExperiencia = 'principiante' | 'intermedio' | 'avanzado'

export interface Inscripcion {
  id: string
  juegoId: string
  usuarioId: string | null
  nombreCompleto: string
  correo: string
  telefono: string | null
  equipoPreferido: string | null
  posicion: string | null
  experiencia: NivelExperiencia
  notas: string | null
  estado: EstadoInscripcion
  creadoEn: string
}

export interface InsertarInscripcion {
  juegoId: string
  nombreCompleto: string
  correo: string
  telefono?: string
  equipoPreferido?: string
  posicion?: string
  experiencia: NivelExperiencia
  notas?: string
}
