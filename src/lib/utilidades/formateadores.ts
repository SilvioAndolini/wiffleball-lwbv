// Funciones de formateo de datos para la interfaz

/**
 * Formatea una fecha ISO a formato legible en español venezolano
 * Ejemplo: '2025-07-15' -> 'martes, 15 de julio de 2025'
 */
export function formatearFecha(fechaISO: string): string {
  return new Intl.DateTimeFormat('es-VE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(fechaISO + 'T12:00:00'))
}

/**
 * Formatea una fecha ISO a formato corto
 * Ejemplo: '2025-07-15' -> '15 Jul'
 */
export function formatearFechaCorta(fechaISO: string): string {
  return new Intl.DateTimeFormat('es-VE', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(fechaISO + 'T12:00:00'))
}

/**
 * Convierte hora de formato 24h a 12h con AM/PM
 * Ejemplo: '14:00' -> '2:00 PM'
 */
export function formatearHora(hora: string): string {
  const [horas, minutos] = hora.split(':').map(Number)
  const periodo = horas >= 12 ? 'PM' : 'AM'
  const hora12 = horas % 12 || 12
  return `${hora12}:${minutos.toString().padStart(2, '0')} ${periodo}`
}

/**
 * Calcula el porcentaje de inscritos respecto al máximo
 */
export function calcularPorcentajeInscritos(inscritos: number, maximo: number): number {
  if (maximo === 0) return 0
  return Math.min(Math.round((inscritos / maximo) * 100), 100)
}
