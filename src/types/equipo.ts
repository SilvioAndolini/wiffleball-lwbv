// Tipos para la entidad Equipo

export interface Equipo {
  id: string
  nombre: string
  descripcion: string | null
  logoUrl: string | null
  colorPrimario: string
  colorSecundario: string
  activo: boolean
  creadoEn: string
  actualizadoEn: string
}

export interface InsertarEquipo {
  nombre: string
  descripcion?: string
  logoUrl?: string
  colorPrimario?: string
  colorSecundario?: string
}
