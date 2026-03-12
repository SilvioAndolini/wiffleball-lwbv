// Constantes globales de la aplicación

export const RUTAS = {
  INICIO: '/',
  CRONOGRAMA: '/cronograma',
  INSCRIPCIONES: '/inscripciones',
  NOSOTROS: '/nosotros',
  CONTACTO: '/contacto',
} as const

export const ENLACES_NAVEGACION = [
  { nombre: 'Inicio', ruta: RUTAS.INICIO },
  { nombre: 'Cronograma', ruta: RUTAS.CRONOGRAMA },
  { nombre: 'Inscripciones', ruta: RUTAS.INSCRIPCIONES },
  { nombre: 'Nosotros', ruta: RUTAS.NOSOTROS },
  { nombre: 'Contacto', ruta: RUTAS.CONTACTO },
] as const

export const COLORES = {
  amarilloNeon: '#FFD700',
  amarilloBrillante: '#FFEA00',
  azulNeon: '#00BFFF',
  azulProfundo: '#0077B6',
  rojoNeon: '#FF3B3B',
  rojoVibrante: '#E63946',
  fondoPrincipal: '#0A0A0F',
  fondoTarjeta: '#12121A',
  fondoElevado: '#1A1A2E',
} as const

export const METADATA_SITIO = {
  titulo: 'Liga de Wiffle Ball Venezolana',
  descripcion: 'La liga de Wiffle Ball más emocionante de Venezuela. Únete, juega y vive la pasión del deporte.',
  urlBase: 'https://wiffleball.ve',
} as const
