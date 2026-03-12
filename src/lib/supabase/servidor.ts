// Cliente Supabase para uso en el servidor (Server Components, API Routes)
// Usa la clave de servicio que NUNCA debe exponerse en el frontend

import { createClient } from '@supabase/supabase-js'

export function crearClienteServidor() {
  const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const claveServicio = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient(urlSupabase, claveServicio)
}
