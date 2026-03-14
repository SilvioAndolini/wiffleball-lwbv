// Constantes globales de la aplicación

export const RUTAS = {
  INICIO: '/',
  CRONOGRAMA: '/cronograma',
  INSCRIPCIONES: '/inscripciones',
  NOSOTROS: '/nosotros',
  CONTACTO: '/contacto',
} as const

export const ENLACE_WHATSAPP = 'https://wa.me/584121234567'

export const ENLACES_NAVEGACION = [
  { nombre: 'Inicio', ruta: RUTAS.INICIO },
  { nombre: 'Cronograma', ruta: RUTAS.CRONOGRAMA },
  { nombre: 'Nosotros', ruta: RUTAS.NOSOTROS },
  { nombre: 'Contacto', ruta: RUTAS.CONTACTO },
] as const

export const COLORES = {
  azulPrimario: '#FFFFFF',
  azulClaro: '#E5E5E5',
  azulCielo: '#C0C0C0',
  azulProfundo: '#808080',
  grisAcento: '#9CA3AF',
  grisMedio: '#6B7280',
  fondoPrincipal: '#0A0A0F',
  fondoTarjeta: '#111118',
  fondoElevado: '#1A1A24',
} as const

export const METADATA_SITIO = {
  titulo: 'Liga Venezolana de Wiffleball',
  descripcion: 'La liga de Wiffle Ball más emocionante de Venezuela. Únete, juega y vive la pasión del deporte.',
  urlBase: 'https://wiffleball.ve',
} as const
