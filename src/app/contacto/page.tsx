// Página de Contacto - Formulario y datos de contacto

import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'
import { FormularioContacto } from '@/components/features/contacto/FormularioContacto'

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos para cualquier duda sobre la Liga de Wiffle Ball Venezolana. Estamos aquí para ayudarte.',
}

export default function PaginaContacto() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-titulos text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-texto-principal">CONT</span>
            <span className="texto-gradiente-venezuela">ACTO</span>
          </h1>
          <p className="text-texto-secundario text-lg max-w-xl mx-auto">
            ¿Tienes preguntas, sugerencias o quieres colaborar?
            Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        {/* Layout: Formulario + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulario (3/5 del ancho) */}
          <div className="lg:col-span-3">
            <ContenedorAnimado variante="desde-izquierda">
              <FormularioContacto />
            </ContenedorAnimado>
          </div>

          {/* Información de contacto (2/5 del ancho) */}
          <div className="lg:col-span-2 space-y-6">
            <ContenedorAnimado variante="desde-derecha">
              {/* Datos de contacto */}
              <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6">
                <h3 className="font-titulos text-xl font-bold text-amarillo-neon mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4 text-texto-secundario text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📧</span>
                    <div>
                      <p className="text-texto-principal font-medium">Correo</p>
                      <p>contacto@wiffleball.ve</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📱</span>
                    <div>
                      <p className="text-texto-principal font-medium">Teléfono</p>
                      <p>+58 412 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-texto-principal font-medium">Ubicación</p>
                      <p>Caracas, Venezuela</p>
                    </div>
                  </div>
                </div>
              </div>
            </ContenedorAnimado>

            <ContenedorAnimado variante="desde-derecha" retraso={0.2}>
              {/* Horarios */}
              <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6">
                <h3 className="font-titulos text-xl font-bold text-texto-principal mb-4">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-texto-secundario">Lunes - Viernes</span>
                    <span className="text-texto-principal">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-texto-secundario">Sábados</span>
                    <span className="text-texto-principal">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-texto-secundario">Domingos</span>
                    <span className="text-texto-apagado">Cerrado</span>
                  </div>
                </div>
              </div>
            </ContenedorAnimado>

            <ContenedorAnimado variante="desde-derecha" retraso={0.3}>
              {/* Redes sociales */}
              <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6">
                <h3 className="font-titulos text-xl font-bold text-texto-principal mb-4">
                  Síguenos
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-texto-secundario hover:text-amarillo-neon transition-colors text-sm"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-texto-secundario hover:text-azul-neon transition-colors text-sm"
                  >
                    🐦 Twitter
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-texto-secundario hover:text-rojo-neon transition-colors text-sm"
                  >
                    ▶️ YouTube
                  </a>
                </div>
              </div>
            </ContenedorAnimado>

            <ContenedorAnimado variante="desde-derecha" retraso={0.4}>
              {/* Mapa placeholder */}
              <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2 opacity-30">🗺️</div>
                  <p className="text-texto-apagado text-sm">
                    Mapa - Próximamente
                  </p>
                </div>
              </div>
            </ContenedorAnimado>
          </div>
        </div>
      </div>
    </div>
  )
}
