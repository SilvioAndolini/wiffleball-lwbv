// Tipos para la entidad Mensaje de Contacto

export interface MensajeContacto {
  id: string
  nombre: string
  correo: string
  asunto: string
  mensaje: string
  leido: boolean
  respondido: boolean
  creadoEn: string
}

export interface InsertarMensajeContacto {
  nombre: string
  correo: string
  asunto: string
  mensaje: string
}
