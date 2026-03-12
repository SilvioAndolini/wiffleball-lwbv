'use client'

// Hook para obtener y gestionar juegos de la liga

import { useState, useEffect, useCallback } from 'react'
import type { JuegoConDetalles, EstadoJuego } from '@/types/juego'

// Datos de ejemplo para desarrollo sin Supabase
const JUEGOS_EJEMPLO: JuegoConDetalles[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    titulo: 'Inauguración Liga 2025',
    descripcion: 'El primer juego de la temporada. ¡No te lo pierdas!',
    fecha: '2025-08-01',
    horaInicio: '14:00',
    horaFin: '17:00',
    ubicacion: 'Parque del Este, Caracas',
    latitud: 10.4961,
    longitud: -66.8469,
    equipoLocalId: null,
    equipoVisitanteId: null,
    marcadorLocal: 0,
    marcadorVisitante: 0,
    estado: 'programado',
    maxJugadores: 20,
    creadoPor: null,
    creadoEn: '2025-06-01T10:00:00Z',
    actualizadoEn: '2025-06-01T10:00:00Z',
    equipoLocal: 'Leones de Caracas',
    equipoVisitante: 'Tiburones de La Guaira',
    totalInscritos: 12,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    titulo: 'Clásico Capitalino',
    descripcion: 'El enfrentamiento más esperado entre los equipos de la capital.',
    fecha: '2025-08-15',
    horaInicio: '10:00',
    horaFin: '13:00',
    ubicacion: 'Parque Los Caobos, Caracas',
    latitud: 10.4986,
    longitud: -66.8929,
    equipoLocalId: null,
    equipoVisitanteId: null,
    marcadorLocal: 0,
    marcadorVisitante: 0,
    estado: 'programado',
    maxJugadores: 24,
    creadoPor: null,
    creadoEn: '2025-06-05T10:00:00Z',
    actualizadoEn: '2025-06-05T10:00:00Z',
    equipoLocal: 'Águilas del Ávila',
    equipoVisitante: 'Halcones de Petare',
    totalInscritos: 18,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    titulo: 'Copa Venezuela - Ronda 1',
    descripcion: 'Primera ronda del torneo nacional de Wiffle Ball.',
    fecha: '2025-09-01',
    horaInicio: '16:00',
    horaFin: '19:00',
    ubicacion: 'Polideportivo de Valencia',
    latitud: 10.1579,
    longitud: -67.9972,
    equipoLocalId: null,
    equipoVisitanteId: null,
    marcadorLocal: 0,
    marcadorVisitante: 0,
    estado: 'programado',
    maxJugadores: 30,
    creadoPor: null,
    creadoEn: '2025-06-10T10:00:00Z',
    actualizadoEn: '2025-06-10T10:00:00Z',
    equipoLocal: 'Toros de Valencia',
    equipoVisitante: 'Bravos de Margarita',
    totalInscritos: 8,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    titulo: 'Doble Jornada Nocturna',
    descripcion: 'Dos juegos seguidos bajo las luces. Ambiente único.',
    fecha: '2025-09-15',
    horaInicio: '18:00',
    horaFin: '22:00',
    ubicacion: 'Estadio Universitario, Caracas',
    latitud: 10.4910,
    longitud: -66.8871,
    equipoLocalId: null,
    equipoVisitanteId: null,
    marcadorLocal: 0,
    marcadorVisitante: 0,
    estado: 'programado',
    maxJugadores: 20,
    creadoPor: null,
    creadoEn: '2025-06-15T10:00:00Z',
    actualizadoEn: '2025-06-15T10:00:00Z',
    equipoLocal: 'Leones de Caracas',
    equipoVisitante: 'Águilas del Ávila',
    totalInscritos: 20,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    titulo: 'Final de Temporada',
    descripcion: 'El gran cierre de temporada con premiación.',
    fecha: '2025-10-15',
    horaInicio: '15:00',
    horaFin: '18:00',
    ubicacion: 'Parque del Este, Caracas',
    latitud: 10.4961,
    longitud: -66.8469,
    equipoLocalId: null,
    equipoVisitanteId: null,
    marcadorLocal: 0,
    marcadorVisitante: 0,
    estado: 'programado',
    maxJugadores: 30,
    creadoPor: null,
    creadoEn: '2025-06-20T10:00:00Z',
    actualizadoEn: '2025-06-20T10:00:00Z',
    equipoLocal: 'Por definir',
    equipoVisitante: 'Por definir',
    totalInscritos: 5,
  },
]

interface OpcionesUseJuegos {
  limite?: number
  soloProximos?: boolean
  estado?: EstadoJuego
}

export function useJuegos(opciones: OpcionesUseJuegos = {}) {
  const { limite = 10, soloProximos = true, estado } = opciones
  const [juegos, setJuegos] = useState<JuegoConDetalles[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const obtenerJuegos = useCallback(async () => {
    setCargando(true)
    setError(null)

    try {
      // Intentar obtener datos de Supabase
      const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!urlSupabase || urlSupabase.includes('TU_PROYECTO')) {
        // Supabase no configurado, usar datos de ejemplo
        let datos = [...JUEGOS_EJEMPLO]

        if (estado) {
          datos = datos.filter(j => j.estado === estado)
        }

        datos = datos.slice(0, limite)
        setJuegos(datos)
        return
      }

      // Importar cliente dinámicamente para evitar errores si Supabase no está configurado
      const { supabase } = await import('@/lib/supabase/cliente')
      const { data, error: errorSupabase } = await supabase
        .rpc('obtener_juegos_proximos', { limite })

      if (errorSupabase) throw new Error(errorSupabase.message)

      const juegosFormateados: JuegoConDetalles[] = (data || []).map((j: Record<string, unknown>) => ({
        id: j.id as string,
        titulo: j.titulo as string,
        descripcion: j.descripcion as string | null,
        fecha: j.fecha as string,
        horaInicio: j.hora_inicio as string,
        horaFin: null,
        ubicacion: j.ubicacion as string,
        latitud: null,
        longitud: null,
        equipoLocalId: null,
        equipoVisitanteId: null,
        marcadorLocal: 0,
        marcadorVisitante: 0,
        estado: j.estado as EstadoJuego,
        maxJugadores: j.max_jugadores as number,
        creadoPor: null,
        creadoEn: '',
        actualizadoEn: '',
        equipoLocal: j.equipo_local as string | null,
        equipoVisitante: j.equipo_visitante as string | null,
        totalInscritos: Number(j.total_inscritos),
      }))

      setJuegos(juegosFormateados)
    } catch (err) {
      console.error('Error al obtener juegos:', err)
      setError('No se pudieron cargar los juegos. Usando datos de ejemplo.')
      setJuegos(JUEGOS_EJEMPLO.slice(0, limite))
    } finally {
      setCargando(false)
    }
  }, [limite, soloProximos, estado])

  useEffect(() => {
    obtenerJuegos()
  }, [obtenerJuegos])

  return { juegos, cargando, error, recargar: obtenerJuegos }
}
