// Página de Contacto - Formulario y datos de contacto

import { HeroPagina } from '@/components/features/compartidos/HeroPagina'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'
import { FormularioContacto } from '@/components/features/contacto/FormularioContacto'

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos para cualquier duda sobre la Liga de Wiffle Ball Venezolana. Estamos aquí para ayudarte.',
}

export default function PaginaContacto() {
  return (
    <>
      <HeroPagina
        etiqueta="HABLEMOS"
        titulo="CONTACTO"
        tituloColor="ACTO"
        subtitulo="¿Tienes preguntas, sugerencias o quieres colaborar? Escríbenos y te responderemos lo antes posible."
      />
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <ContenedorAnimado variante="desde-izquierda">
                <FormularioContacto />
              </ContenedorAnimado>
            </div>

            {/* Info de contacto */}
            <div className="lg:col-span-2 space-y-4">
              <ContenedorAnimado variante="desde-derecha">
                <div className="vidrio rounded-2xl p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
                    INFORMACIÓN
                  </p>
                  <div className="space-y-5 text-sm">
                    <div>
                      <p className="text-texto-principal font-medium mb-1">Correo</p>
                      <p className="text-texto-secundario/70">contacto@wiffleball.ve</p>
                    </div>
                    <div>
                      <p className="text-texto-principal font-medium mb-1">Teléfono</p>
                      <p className="text-texto-secundario/70">+58 412 123 4567</p>
                    </div>
                    <div>
                      <p className="text-texto-principal font-medium mb-1">Ubicación</p>
                      <p className="text-texto-secundario/70">Caracas, Venezuela</p>
                    </div>
                  </div>
                </div>
              </ContenedorAnimado>

              <ContenedorAnimado variante="desde-derecha" retraso={0.1}>
                <div className="vidrio rounded-2xl p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-texto-apagado mb-4">
                    HORARIO
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-texto-secundario/70">Lunes - Viernes</span>
                      <span className="text-texto-principal">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-texto-secundario/70">Sábados</span>
                      <span className="text-texto-principal">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-texto-secundario/70">Domingos</span>
                      <span className="text-texto-apagado">Cerrado</span>
                    </div>
                  </div>
                </div>
              </ContenedorAnimado>

              <ContenedorAnimado variante="desde-derecha" retraso={0.2}>
                <div className="vidrio rounded-2xl p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-texto-apagado mb-4">
                    REDES
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-xs uppercase tracking-wider text-texto-apagado hover:text-azul-primario transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-xs uppercase tracking-wider text-texto-apagado hover:text-azul-cielo transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-xs uppercase tracking-wider text-texto-apagado hover:text-gris-acento transition-colors">
                      YouTube
                    </a>
                  </div>
                </div>
              </ContenedorAnimado>

              <ContenedorAnimado variante="desde-derecha" retraso={0.3}>
                <div className="vidrio rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-3xl mb-2 opacity-10">🗺️</div>
                    <p className="text-texto-apagado text-xs">
                      Mapa - Próximamente
                    </p>
                  </div>
                </div>
              </ContenedorAnimado>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
