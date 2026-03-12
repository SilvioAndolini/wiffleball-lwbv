# Configuración de Supabase - Liga de Wiffle Ball Venezolana

## Pasos para configurar

1. **Crear proyecto en Supabase:**
   - Ir a [supabase.com](https://supabase.com) y crear una cuenta
   - Crear un nuevo proyecto con la región más cercana a Venezuela (ej. us-east-1)
   - Anotar la URL del proyecto y las claves API

2. **Ejecutar los esquemas SQL:**
   - Ir a **SQL Editor** en el dashboard de Supabase
   - Ejecutar los archivos en este orden:
     1. `001_crear_tablas.sql` - Crea las tablas, índices y triggers
     2. `002_politicas_rls.sql` - Configura las políticas de seguridad RLS
     3. `003_funciones_rpc.sql` - Crea las funciones RPC

3. **Configurar variables de entorno:**
   - Copiar `.env.example` como `.env.local`
   - Reemplazar con los valores reales de tu proyecto:
     - `NEXT_PUBLIC_SUPABASE_URL`: En Settings > API > Project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: En Settings > API > anon/public
     - `SUPABASE_SERVICE_ROLE_KEY`: En Settings > API > service_role (SECRETA)

4. **Habilitar autenticación:**
   - Ir a Authentication > Providers
   - Habilitar Email/Password como mínimo
   - Opcional: Google, GitHub u otros proveedores

## Tablas creadas

| Tabla | Descripción |
|-------|-------------|
| `equipos` | Equipos de la liga con nombre, colores y logo |
| `usuarios` | Perfiles de usuarios (extiende auth.users) |
| `juegos` | Partidos programados con fecha, equipos y ubicación |
| `inscripciones` | Registro de jugadores a juegos específicos |
| `mensajes_contacto` | Mensajes del formulario de contacto |
