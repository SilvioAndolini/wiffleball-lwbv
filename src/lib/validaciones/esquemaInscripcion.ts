// Esquema de validación Zod para el formulario de inscripción

import { z } from 'zod'

export const esquemaInscripcion = z.object({
  nombreCompleto: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(200, 'El nombre no puede exceder 200 caracteres'),
  correo: z
    .string()
    .email('Ingresa un correo válido'),
  telefono: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, 'Ingresa un número de teléfono válido')
    .optional()
    .or(z.literal('')),
  juegoId: z
    .string()
    .uuid('Selecciona un juego válido'),
  equipoPreferido: z
    .string()
    .uuid()
    .optional()
    .or(z.literal('')),
  posicion: z
    .string()
    .max(50)
    .optional()
    .or(z.literal('')),
  experiencia: z
    .enum(['principiante', 'intermedio', 'avanzado'], {
      message: 'Selecciona tu nivel de experiencia',
    }),
  notas: z
    .string()
    .max(500, 'Las notas no pueden exceder 500 caracteres')
    .optional()
    .or(z.literal('')),
})

export type DatosInscripcion = z.infer<typeof esquemaInscripcion>
