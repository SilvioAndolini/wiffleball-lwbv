'use client'

// Formulario de contacto validado con React Hook Form + Zod

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { esquemaContacto, type DatosContacto } from '@/lib/validaciones/esquemaContacto'

export function FormularioContacto() {
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<DatosContacto>({
    resolver: zodResolver(esquemaContacto),
    mode: 'onBlur',
  })

  const mensajeActual = watch('mensaje') || ''

  async function alEnviar(datos: DatosContacto) {
    setEnviando(true)
    setErrorEnvio(null)

    try {
      // Verificar si Supabase está configurado
      const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!urlSupabase || urlSupabase.includes('TU_PROYECTO')) {
        // Simular envío
        await new Promise(resolve => setTimeout(resolve, 1500))
        setExito(true)
        reset()
        return
      }

      // Enviar a Supabase
      const { supabase } = await import('@/lib/supabase/cliente')
      const { error } = await supabase
        .from('mensajes_contacto')
        .insert({
          nombre: datos.nombre,
          correo: datos.correo,
          asunto: datos.asunto,
          mensaje: datos.mensaje,
        })

      if (error) throw new Error(error.message)

      setExito(true)
      reset()
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : 'Error al enviar el mensaje'
      setErrorEnvio(mensaje)
    } finally {
      setEnviando(false)
    }
  }

  if (exito) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-fondo-tarjeta border border-green-500/30 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
        >
          <span className="text-4xl">📨</span>
        </motion.div>
        <h3 className="font-titulos text-2xl font-bold text-green-400 mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-texto-secundario mb-6">
          Hemos recibido tu mensaje. Te responderemos lo antes posible.
        </p>
        <Button
          onClick={() => setExito(false)}
          className="bg-amarillo-neon text-fondo-principal font-titulos font-bold hover:bg-amarillo-brillante"
        >
          ENVIAR OTRO MENSAJE
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(alEnviar)}
      className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6 md:p-8 space-y-6"
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

      {/* Nombre */}
      <div className="space-y-2">
        <Label htmlFor="nombre" className="text-texto-principal font-medium">
          Nombre <span className="text-rojo-neon">*</span>
        </Label>
        <Input
          id="nombre"
          placeholder="Tu nombre"
          className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
          {...register('nombre')}
        />
        {errors.nombre && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.nombre.message}
          </motion.p>
        )}
      </div>

      {/* Correo */}
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

      {/* Asunto */}
      <div className="space-y-2">
        <Label htmlFor="asunto" className="text-texto-principal font-medium">
          Asunto <span className="text-rojo-neon">*</span>
        </Label>
        <Input
          id="asunto"
          placeholder="¿En qué podemos ayudarte?"
          className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal"
          {...register('asunto')}
        />
        {errors.asunto && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.asunto.message}
          </motion.p>
        )}
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="mensaje" className="text-texto-principal font-medium">
            Mensaje <span className="text-rojo-neon">*</span>
          </Label>
          <span className="text-texto-apagado text-xs">
            {mensajeActual.length}/2000
          </span>
        </div>
        <Textarea
          id="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          className="bg-fondo-elevado border-borde-sutil focus:border-amarillo-neon text-texto-principal resize-none"
          {...register('mensaje')}
        />
        {errors.mensaje && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rojo-neon text-xs">
            {errors.mensaje.message}
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
          'ENVIAR MENSAJE'
        )}
      </Button>
    </motion.form>
  )
}
