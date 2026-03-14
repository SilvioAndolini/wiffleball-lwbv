// Página Nosotros - Sobre la Liga de Wiffle Ball Venezolana

import Image from 'next/image'
import { HeroPagina } from '@/components/features/compartidos/HeroPagina'
import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, los valores y el equipo detrás de la Liga de Wiffle Ball Venezolana.',
}

const EQUIPO = [
  {
    nombre: 'Manuel Sanchez',
    rol: 'Fundador & Comisionado',
    descripcion: 'Impulsor principal de la Liga Venezolana de Wiffle Ball. Organizador de torneos y referente del deporte en el país.',
    foto: '/imagenes/DSC06704.jpg',
  },
]

const VALORES = [
  { titulo: 'Pasión', descripcion: 'Vivimos y respiramos wiffle ball. Cada juego es una oportunidad para disfrutar.' },
  { titulo: 'Comunidad', descripcion: 'Más que una liga, somos una familia que crece con cada temporada.' },
  { titulo: 'Fair Play', descripcion: 'El respeto y la deportividad son la base de cada partido.' },
  { titulo: 'Diversión', descripcion: 'No importa si ganas o pierdes, lo importante es pasarla increíble.' },
]

const REGLAS = [
  { titulo: 'El Juego', descripcion: 'Dos equipos se enfrentan en un campo reducido. Se juega con una pelota de plástico perforada y un bate delgado.' },
  { titulo: 'Equipamiento', descripcion: 'Solo necesitas un bate de wiffle ball, pelotas oficiales y marcadores para el campo. Nosotros proveemos todo.' },
  { titulo: '¿Por qué es genial?', descripcion: 'Es accesible para todos los niveles, se puede jugar en espacios pequeños, y las jugadas son espectaculares.' },
]

export default function PaginaNosotros() {
  return (
    <>
      <HeroPagina
        etiqueta="CONÓCENOS"
        titulo="NOSOTROS"
        tituloColor="OTROS"
        subtitulo="La historia de cómo un grupo de apasionados creó la liga de wiffle ball más vibrante de Venezuela."
      />

      {/* Nuestra Historia */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ContenedorAnimado variante="desde-izquierda">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              ORIGEN
            </p>
            <h2 className="font-titulos text-4xl md:text-5xl font-bold leading-[0.9] mb-8">
              <span className="text-texto-principal">NUESTRA </span>
              <span className="texto-gradiente">HISTORIA</span>
            </h2>
            <div className="space-y-4 text-texto-secundario/70 text-sm leading-relaxed">
              <p>
                Todo comenzó en 2024, cuando un grupo de amigos en Caracas decidió organizar
                un juego informal de wiffle ball en el Parque del Este. Lo que empezó como una
                tarde de diversión se convirtió en algo mucho más grande.
              </p>
              <p>
                La energía fue tan contagiosa que más personas se sumaron semana tras semana.
                Así nació la idea de formalizar una liga que le diera estructura y emoción
                al deporte en Venezuela.
              </p>
              <p>
                Hoy, la Liga de Wiffle Ball Venezolana reúne a jugadores de todo el país,
                organizando torneos, eventos especiales y fomentando una comunidad deportiva única.
              </p>
            </div>
          </ContenedorAnimado>

          <ContenedorAnimado variante="desde-derecha">
            <div className="bg-fondo-tarjeta/50 border border-borde-sutil/50 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4 opacity-10">⚾</div>
                <p className="text-texto-apagado text-xs">
                  Foto del equipo - Reemplazar
                </p>
              </div>
            </div>
          </ContenedorAnimado>
        </div>
      </section>

      {/* ¿Qué es el Wiffle Ball? */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContenedorAnimado className="mb-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              EL DEPORTE
            </p>
            <h2 className="font-titulos text-4xl md:text-5xl font-bold leading-[0.9]">
              <span className="text-texto-principal">¿QUÉ ES EL </span>
              <span className="texto-gradiente">WIFFLE BALL?</span>
            </h2>
          </ContenedorAnimado>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REGLAS.map((regla, indice) => (
              <ContenedorAnimado key={regla.titulo} retraso={indice * 0.1}>
                <div className="bg-fondo-tarjeta/50 border border-borde-sutil/50 rounded-2xl p-6 h-full hover:border-azul-primario/20 transition-all duration-500">
                  <span className="inline-block font-titulos text-3xl font-bold text-azul-primario/20 mb-4">
                    0{indice + 1}
                  </span>
                  <h3 className="font-titulos text-lg font-bold text-texto-principal mb-2">
                    {regla.titulo}
                  </h3>
                  <p className="text-texto-secundario/70 text-sm leading-relaxed">
                    {regla.descripcion}
                  </p>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Organizador */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContenedorAnimado className="mb-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              EQUIPO
            </p>
            <h2 className="font-titulos text-4xl md:text-5xl font-bold leading-[0.9]">
              <span className="text-texto-principal">LAS </span>
              <span className="texto-gradiente">PERSONAS</span>
            </h2>
            <p className="text-texto-secundario/70 text-sm mt-4">
              Las personas que hacen posible la liga.
            </p>
          </ContenedorAnimado>

          <div className="flex flex-wrap gap-6">
            {EQUIPO.map((miembro, indice) => (
              <ContenedorAnimado key={miembro.nombre} variante="escala" retraso={indice * 0.1}>
                <div className="bg-fondo-tarjeta/50 border border-borde-sutil/50 rounded-2xl overflow-hidden hover:border-azul-primario/20 transition-all duration-500 group w-72">
                  {/* Foto grande */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={miembro.foto}
                      alt={miembro.nombre}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fondo-tarjeta via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-titulos text-xl font-bold text-texto-principal leading-tight">
                      {miembro.nombre}
                    </h3>
                    {miembro.rol && (
                      <p className="text-azul-cielo text-xs font-medium uppercase tracking-[0.12em] mt-1 mb-3">
                        {miembro.rol}
                      </p>
                    )}
                    <div className="h-px bg-borde-sutil/50 mb-3" />
                    {miembro.descripcion && (
                      <p className="text-texto-secundario/70 text-sm leading-relaxed">
                        {miembro.descripcion}
                      </p>
                    )}
                  </div>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ContenedorAnimado className="mb-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-azul-primario/60 mb-4">
              FILOSOFÍA
            </p>
            <h2 className="font-titulos text-4xl md:text-5xl font-bold leading-[0.9]">
              <span className="text-texto-principal">NUESTROS </span>
              <span className="texto-gradiente">VALORES</span>
            </h2>
          </ContenedorAnimado>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALORES.map((valor, indice) => (
              <ContenedorAnimado key={valor.titulo} retraso={indice * 0.1}>
                <div className="border-t border-borde-sutil/50 pt-6">
                  <span className="inline-block font-titulos text-2xl font-bold text-azul-primario/20 mb-3">
                    0{indice + 1}
                  </span>
                  <h3 className="font-titulos text-lg font-bold text-texto-principal mb-2">
                    {valor.titulo}
                  </h3>
                  <p className="text-texto-secundario/70 text-sm leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
