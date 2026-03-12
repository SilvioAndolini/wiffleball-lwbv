// Página Nosotros - Sobre la Liga de Wiffle Ball Venezolana

import { ContenedorAnimado } from '@/components/features/compartidos/ContenedorAnimado'

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, los valores y el equipo detrás de la Liga de Wiffle Ball Venezolana.',
}

// Datos del equipo organizador
const EQUIPO = [
  { nombre: 'Carlos Rodríguez', rol: 'Fundador & Director', frase: 'El wiffle ball une a Venezuela.' },
  { nombre: 'María González', rol: 'Coordinadora de Eventos', frase: 'Cada juego es una fiesta.' },
  { nombre: 'José Martínez', rol: 'Director Deportivo', frase: 'Fair play ante todo.' },
  { nombre: 'Ana López', rol: 'Community Manager', frase: 'La comunidad es nuestra fuerza.' },
]

// Valores de la liga
const VALORES = [
  { icono: '🔥', titulo: 'Pasión', descripcion: 'Vivimos y respiramos wiffle ball. Cada juego es una oportunidad para disfrutar.' },
  { icono: '🤝', titulo: 'Comunidad', descripcion: 'Más que una liga, somos una familia que crece con cada temporada.' },
  { icono: '⚖️', titulo: 'Fair Play', descripcion: 'El respeto y la deportividad son la base de cada partido.' },
  { icono: '🎉', titulo: 'Diversión', descripcion: 'No importa si ganas o pierdes, lo importante es pasarla increíble.' },
]

// Reglas básicas del wiffle ball
const REGLAS = [
  { titulo: 'El Juego', descripcion: 'Dos equipos se enfrentan en un campo reducido. Se juega con una pelota de plástico perforada y un bate delgado.' },
  { titulo: 'Equipamiento', descripcion: 'Solo necesitas un bate de wiffle ball, pelotas oficiales y marcadores para el campo. Nosotros proveemos todo.' },
  { titulo: '¿Por qué es genial?', descripcion: 'Es accesible para todos los niveles, se puede jugar en espacios pequeños, y las jugadas son espectaculares.' },
]

export default function PaginaNosotros() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 gradiente-fondo opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ContenedorAnimado>
            <h1 className="font-titulos text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-texto-principal">SOBRE </span>
              <span className="texto-gradiente-venezuela">NOSOTROS</span>
            </h1>
            <p className="text-texto-secundario text-lg max-w-xl mx-auto">
              La historia de cómo un grupo de apasionados creó la liga de wiffle ball más vibrante de Venezuela.
            </p>
          </ContenedorAnimado>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ContenedorAnimado variante="desde-izquierda">
            <h2 className="font-titulos text-3xl md:text-4xl font-bold text-texto-principal mb-6">
              Nuestra <span className="text-amarillo-neon">Historia</span>
            </h2>
            <div className="space-y-4 text-texto-secundario leading-relaxed">
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
                organizando torneos, eventos especiales y fomentando una comunidad
                deportiva única.
              </p>
            </div>
          </ContenedorAnimado>

          <ContenedorAnimado variante="desde-derecha">
            <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-7xl mb-4 opacity-30">⚾</div>
                <p className="text-texto-apagado text-sm">
                  Foto del equipo - Reemplazar con imagen real
                </p>
              </div>
            </div>
          </ContenedorAnimado>
        </div>
      </section>

      {/* ¿Qué es el Wiffle Ball? */}
      <section className="py-16 px-4 bg-fondo-tarjeta/30">
        <div className="max-w-6xl mx-auto">
          <ContenedorAnimado className="text-center mb-12">
            <h2 className="font-titulos text-3xl md:text-4xl font-bold">
              <span className="text-texto-principal">¿Qué es el </span>
              <span className="texto-gradiente-venezuela">Wiffle Ball</span>
              <span className="text-texto-principal">?</span>
            </h2>
          </ContenedorAnimado>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REGLAS.map((regla, indice) => (
              <ContenedorAnimado key={regla.titulo} retraso={indice * 0.15}>
                <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6 h-full hover:border-amarillo-neon/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-amarillo-neon/10 flex items-center justify-center mb-4">
                    <span className="font-titulos text-xl font-bold text-amarillo-neon">
                      {indice + 1}
                    </span>
                  </div>
                  <h3 className="font-titulos text-xl font-bold text-texto-principal mb-2">
                    {regla.titulo}
                  </h3>
                  <p className="text-texto-secundario text-sm leading-relaxed">
                    {regla.descripcion}
                  </p>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Organizador */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ContenedorAnimado className="text-center mb-12">
            <h2 className="font-titulos text-3xl md:text-4xl font-bold">
              <span className="text-texto-principal">El </span>
              <span className="texto-gradiente-venezuela">Equipo</span>
            </h2>
            <p className="text-texto-secundario mt-3">
              Las personas que hacen posible la liga.
            </p>
          </ContenedorAnimado>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EQUIPO.map((miembro, indice) => (
              <ContenedorAnimado key={miembro.nombre} variante="escala" retraso={indice * 0.1}>
                <div className="bg-fondo-tarjeta border border-borde-sutil rounded-xl p-6 text-center hover:border-amarillo-neon/30 transition-all hover:shadow-lg hover:shadow-amarillo-neon/5 group">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-fondo-elevado flex items-center justify-center group-hover:ring-2 group-hover:ring-amarillo-neon/30 transition-all">
                    <span className="text-2xl font-titulos font-bold text-texto-apagado">
                      {miembro.nombre.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-titulos text-lg font-bold text-texto-principal">
                    {miembro.nombre}
                  </h3>
                  <p className="text-amarillo-neon text-sm font-medium mb-2">
                    {miembro.rol}
                  </p>
                  <p className="text-texto-apagado text-xs italic">
                    &ldquo;{miembro.frase}&rdquo;
                  </p>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 bg-fondo-tarjeta/30">
        <div className="max-w-6xl mx-auto">
          <ContenedorAnimado className="text-center mb-12">
            <h2 className="font-titulos text-3xl md:text-4xl font-bold">
              <span className="text-texto-principal">Nuestros </span>
              <span className="texto-gradiente-venezuela">Valores</span>
            </h2>
          </ContenedorAnimado>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALORES.map((valor, indice) => (
              <ContenedorAnimado key={valor.titulo} retraso={indice * 0.1}>
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">{valor.icono}</div>
                  <h3 className="font-titulos text-xl font-bold text-texto-principal mb-2">
                    {valor.titulo}
                  </h3>
                  <p className="text-texto-secundario text-sm leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              </ContenedorAnimado>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
