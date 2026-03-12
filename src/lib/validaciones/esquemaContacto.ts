// Esquema de validación Zod para el formulario de contacto

import { z } from 'zod'

export const esquemaContacto = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre es obligatorio')
    .max(200, 'El nombre no puede exceder 200 caracteres'),
  correo: z
    .string()
    .email('Ingresa un correo válido'),
  asunto: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(300, 'El asunto no puede exceder 300 caracteres'),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
})

export type DatosContacto = z.infer<typeof esquemaContacto>
