'use client'

// Hook para manejar la lógica de inscripción a juegos

import { useState } from 'react'
import { esquemaInscripcion, type DatosInscripcion } from '@/lib/validaciones/esquemaInscripcion'

interface EstadoInscripcion {
  enviando: boolean
  exito: boolean
  error: string | null
}

export function useInscripcion() {
  const [estado, setEstado] = useState<EstadoInscripcion>({
    enviando: false,
    exito: false,
    error: null,
  })

  async function enviarInscripcion(datos: DatosInscripcion) {
    setEstado({ enviando: true, exito: false, error: null })

    try {
      // Validar datos con Zod
      const datosValidados = esquemaInscripcion.parse(datos)

      // Verificar si Supabase está configurado
      const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!urlSupabase || urlSupabase.includes('TU_PROYECTO')) {
        // Simular envío para desarrollo
        await new Promise(resolve => setTimeout(resolve, 1500))
        setEstado({ enviando: false, exito: true, error: null })
        return
      }

      // Importar cliente Supabase
      const { supabase } = await import('@/lib/supabase/cliente')

      // Verificar si ya está inscrito
      const { data: yaInscrito } = await supabase
        .rpc('verificar_inscripcion', {
          p_juego_id: datosValidados.juegoId,
          p_correo: datosValidados.correo,
        })

      if (yaInscrito) {
        setEstado({
          enviando: false,
          exito: false,
          error: 'Ya estás inscrito en este juego con ese correo.',
        })
        return
      }

      // Insertar inscripción
      const { error: errorInsercion } = await supabase
        .from('inscripciones')
        .insert({
          juego_id: datosValidados.juegoId,
          nombre_completo: datosValidados.nombreCompleto,
          correo: datosValidados.correo,
          telefono: datosValidados.telefono || null,
          equipo_preferido: datosValidados.equipoPreferido || null,
          posicion: datosValidados.posicion || null,
          experiencia: datosValidados.experiencia,
          notas: datosValidados.notas || null,
        })

      if (errorInsercion) throw new Error(errorInsercion.message)

      setEstado({ enviando: false, exito: true, error: null })
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : 'Error al enviar la inscripción'
      setEstado({ enviando: false, exito: false, error: mensaje })
    }
  }

  function reiniciar() {
    setEstado({ enviando: false, exito: false, error: null })
  }

  return { ...estado, enviarInscripcion, reiniciar }
}
