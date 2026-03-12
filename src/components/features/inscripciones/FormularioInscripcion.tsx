'use client'

// Formulario de inscripción a juegos de la liga
// Validado con React Hook Form + Zod

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { esquemaInscripcion, type DatosInscripcion } from '@/lib/validaciones/esquemaInscripcion'
import { useInscripcion } from '@/hooks/useInscripcion'
import { useJuegos } from '@/hooks/useJuegos'

export function FormularioInscripcion() {
  const parametros = useSearchParams()
  const juegoPreseleccionado = parametros.get('juego') || ''
  const { juegos } = useJuegos({ limite: 20 })
  const { enviando, exito, error: errorEnvio, enviarInscripcion, reiniciar } = useInscripcion()

  // Configurar formulario con Zod
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DatosInscripcion>({
    resolver: zodResolver(esquemaInscripcion),
    mode: 'onBlur',
    defaultValues: {
      nombreCompleto: '',
      correo: '',
      telefono: '',
      juegoId: juegoPreseleccionado,
      equipoPreferido: '',
      posicion: '',
      experiencia: 'principiante',
      notas: '',
    },
  })

  // Pre-seleccionar juego de la URL
  useEffect(() => {
    if (juegoPreseleccionado) {
      setValue('juegoId', juegoPreseleccionado)
    }
  }, [juegoPreseleccionado, setValue])

  const notasActuales = watch('notas') || ''

  // Enviar formulario
  async function alEnviar(datos: DatosInscripcion) {
    await enviarInscripcion(datos)
  }

  // Juegos disponibles para inscribirse
  const juegosDisponibles = juegos.filter(j =>
    j.estado === 'programado' && j.totalInscritos < j.maxJugadores
  )

  // Si se envió exitosamente, mostrar confirmación
  if (exito) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-fondo-tarjeta border border-green-500/30 rounded-xl p-8 text-center max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
        >
          <span className="text-4xl">✅</span>
        </motion.div>
        <h3 className="font-titulos text-2xl font-bold text-green-400 mb-2">
          ¡Inscripción Enviada!
        </h3>
        <p className="text-texto-secundario mb-6">
          Tu inscripción ha sido recibida. Te confirmaremos por correo electrónico.
        </p>
        <Button
          onClick={reiniciar}
          className="bg-amarillo-neon text-fondo-principal font-titulos font-bold hover:bg-amarillo-brillante"
        >
          INSCRIBIRSE EN OTRO JUEGO
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(alEnviar)}
      className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6 md:p-8 space-y-6 max-w-2xl mx-auto"
    >
      {/* Error global */}
      <AnimatePresence>
        {errorEnvio && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-rojo-neon/10 border border-rojo-neon/30 rounded-lg p-4 text-rojo-neon text-sm"
          >
            {errorEnvio}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nombre completo */}
      <div className="space-y-2">
        <Label htmlFor="nombreCompleto" className="text-texto-principal font-medium">
          Nombre Completo <span className="text-rojo-neon">*</span>
        </Label>
        <Input
          id="nombreCompleto"
          placeholder="Tu nombre completo"
          className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
          {...register('nombreCompleto')}
        />
        {errors.nombreCompleto && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.nombreCompleto.message}
          </motion.p>
        )}
      </div>

      {/* Correo y teléfono en fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="correo" className="text-texto-principal font-medium">
            Correo Electrónico <span className="text-rojo-neon">*</span>
          </Label>
          <Input
            id="correo"
            type="email"
            placeholder="tu@correo.com"
            className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
            {...register('correo')}
          />
          {errors.correo && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
              {errors.correo.message}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono" className="text-texto-principal font-medium">
            Teléfono
          </Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="+58 412 1234567"
            className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
            {...register('telefono')}
          />
          {errors.telefono && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
              {errors.telefono.message}
            </motion.p>
          )}
        </div>
      </div>

      {/* Juego */}
      <div className="space-y-2">
        <Label htmlFor="juegoId" className="text-texto-principal font-medium">
          Juego <span className="text-rojo-neon">*</span>
        </Label>
        <select
          id="juegoId"
          className="w-full h-9 rounded-lg border border-borde-sutil bg-fondo-elevado px-3 text-sm text-texto-principal focus:border-amarillo-neon focus:outline-none focus:ring-1 focus:ring-amarillo-neon"
          {...register('juegoId')}
        >
          <option value="">Selecciona un juego</option>
          {juegosDisponibles.map(juego => (
            <option key={juego.id} value={juego.id}>
              {juego.titulo} - {juego.fecha} ({juego.totalInscritos}/{juego.maxJugadores})
            </option>
          ))}
        </select>
        {errors.juegoId && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.juegoId.message}
          </motion.p>
        )}
      </div>

      {/* Experiencia y posición */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="experiencia" className="text-texto-principal font-medium">
            Nivel de Experiencia <span className="text-rojo-neon">*</span>
          </Label>
          <select
            id="experiencia"
            className="w-full h-9 rounded-lg border border-borde-sutil bg-fondo-elevado px-3 text-sm text-texto-principal focus:border-amarillo-neon focus:outline-none focus:ring-1 focus:ring-amarillo-neon"
            {...register('experiencia')}
          >
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
          {errors.experiencia && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
              {errors.experiencia.message}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="posicion" className="text-texto-principal font-medium">
            Posición Preferida
          </Label>
          <Input
            id="posicion"
            placeholder="Ej: Pitcher, Bateador, Jardinero"
            className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
            {...register('posicion')}
          />
        </div>
      </div>

      {/* Notas */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="notas" className="text-texto-principal font-medium">
            Notas Adicionales
          </Label>
          <span className="text-texto-apagado text-xs">
            {notasActuales.length}/500
          </span>
        </div>
        <Textarea
          id="notas"
          placeholder="Algo que debamos saber..."
          rows={3}
          className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal resize-none"
          {...register('notas')}
        />
        {errors.notas && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.notas.message}
          </motion.p>
        )}
      </div>

      {/* Botón enviar */}
      <Button
        type="submit"
        disabled={enviando}
        className="w-full bg-amarillo-neon text-fondo-principal font-titulos font-bold text-lg py-6 hover:bg-amarillo-brillante transition-all disabled:opacity-50"
      >
        {enviando ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-fondo-principal/30 border-t-fondo-principal rounded-full animate-spin" />
            ENVIANDO...
          </span>
        ) : (
          'ENVIAR INSCRIPCIÓN ⚡'
        )}
      </Button>
    </motion.form>
  )
}
