// Tipos para la entidad Usuario

export type RolUsuario = 'admin' | 'organizador' | 'jugador' | 'espectador'

export interface Usuario {
  id: string
  nombreCompleto: string
  apodo: string | null
  correo: string
  telefono: string | null
  equipoId: string | null
  rol: RolUsuario
  avatarUrl: string | null
  activo: boolean
  creadoEn: string
  actualizadoEn: string
}

export interface InsertarUsuario {
  id: string
  nombreCompleto: string
  correo: string
  apodo?: string
  telefono?: string
  equipoId?: string
  rol?: RolUsuario
}
