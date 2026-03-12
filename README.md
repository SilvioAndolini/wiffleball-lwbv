# Liga de Wiffle Ball Venezolana

Aplicacion web oficial de la Liga de Wiffle Ball Venezolana. Construida con Next.js, Tailwind CSS, Framer Motion y Supabase.

## Stack Tecnologico

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Estilos:** Tailwind CSS 4
- **Componentes UI:** shadcn/ui (Base UI)
- **Animaciones:** Framer Motion + GSAP
- **Base de Datos:** Supabase (PostgreSQL)
- **Formularios:** React Hook Form + Zod
- **Fuentes:** Oswald (titulos) + Inter (cuerpo)

## Inicio Rapido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Editar `.env.local` con las credenciales de tu proyecto Supabase. Ver `sql/INSTRUCCIONES_SUPABASE.md` para la guia completa.

**Nota:** La aplicacion funciona sin Supabase usando datos de ejemplo.

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### 4. Compilar para produccion

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
src/
├── app/                    # Rutas de la aplicacion
│   ├── page.tsx            # Inicio
│   ├── cronograma/         # Lista de juegos
│   ├── inscripciones/      # Formulario de inscripcion
│   ├── nosotros/           # Sobre la liga
│   └── contacto/           # Formulario de contacto
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   └── features/           # Componentes por modulo
│       ├── navegacion/     # Barra de navegacion
│       ├── inicio/         # Secciones de la pagina principal
│       ├── cronograma/     # Tarjetas y lista de juegos
│       ├── inscripciones/  # Formulario de inscripcion
│       ├── contacto/       # Formulario de contacto
│       ├── compartidos/    # Componentes reutilizables
│       └── proveedores/    # Contextos y providers
├── lib/
│   ├── supabase/           # Clientes de base de datos
│   ├── validaciones/       # Esquemas Zod
│   ├── utilidades/         # Constantes y formateadores
│   └── animaciones/        # Variantes de Framer Motion
├── hooks/                  # Hooks personalizados
└── types/                  # Definiciones TypeScript
sql/                        # Esquemas SQL para Supabase
```

## Configuracion de Supabase

Ver la guia detallada en `sql/INSTRUCCIONES_SUPABASE.md`.

Los archivos SQL deben ejecutarse en este orden:
1. `sql/001_crear_tablas.sql` - Tablas, indices y triggers
2. `sql/002_politicas_rls.sql` - Politicas de seguridad RLS
3. `sql/003_funciones_rpc.sql` - Funciones RPC

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Amarillo Neon | `#FFD700` | Color primario, CTAs, acentos |
| Azul Neon | `#00BFFF` | Color secundario, equipo visitante |
| Rojo Neon | `#FF3B3B` | Alertas, equipo local, destructivos |
| Fondo Principal | `#0A0A0F` | Fondo del sitio |
| Fondo Tarjeta | `#12121A` | Tarjetas y contenedores |
| Fondo Elevado | `#1A1A2E` | Inputs y elementos elevados |

## Reemplazar Imagenes

Las imagenes placeholder se encuentran en `public/imagenes/`. Ver:
- `public/imagenes/INSTRUCCIONES_IMAGENES.md` - Guia general
- `public/imagenes/carrusel/INSTRUCCIONES_FOTOS.md` - Fotos del carrusel

## Seguridad

- Validacion estricta con Zod en cliente y servidor
- Row Level Security (RLS) en todas las tablas de Supabase
- Variables de entorno protegidas (`.env.local` en `.gitignore`)
- `SUPABASE_SERVICE_ROLE_KEY` nunca expuesta en el frontend
- Header `X-Powered-By` deshabilitado

## Licencia

Proyecto privado - Liga de Wiffle Ball Venezolana.
