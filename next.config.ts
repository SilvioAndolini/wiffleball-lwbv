import type { NextConfig } from 'next'

const configuracion: NextConfig = {
  // Permitir imágenes de Supabase Storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  // Deshabilitar header por seguridad
  poweredByHeader: false,
}

export default configuracion
