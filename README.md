# Panel de gestión de un proyecto

Plantilla para coordinar un único proyecto. Teams sigue siendo el repositorio de documentos; este panel guarda solo datos de gestión y enlaces.

## Instalación local

1. Copie `.env.example` como `.env` y complete la URL y clave anónima de su proyecto Supabase.
2. En Supabase, ejecute `supabase/migrations/20260715000000_initial.sql` en el editor SQL o mediante la CLI.
3. En Authentication active el proveedor **Email** y cree/invite a las cuentas del equipo. Luego registre sus filas en `members` para el único `project` creado.
4. Instale dependencias con `npm install` y ejecute `npm run dev`.

## Publicación

Convierta este repositorio en una plantilla de GitHub. Para cada proyecto cree un repositorio y Supabase nuevos; no reutilice la base de datos. En GitHub agregue los secretos `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`, habilite Pages con **GitHub Actions** como fuente y suba cambios a `main`.

La aplicación está preparada para rutas relativas, por lo que funciona tanto en Pages como en una ruta de repositorio. Nunca use la service role key en el cliente.

## Uso diario y reunión semanal

Las tareas se crean y actualizan solamente en **Tareas**. Al cambiar estado, responsable o fechas, Resumen, Productos y Cronograma se recalculan. Las fechas programadas son la línea base; toda reprogramación se ingresa como fecha ajustada. El Cronograma es deliberadamente de solo lectura.

Durante la reunión actualice las tareas en vivo. Al terminar, genere el acta en Teams y guarde únicamente el enlace en **Reuniones**. Para respaldo, descargue periódicamente el JSON/CSV desde Configuración y las vistas correspondientes.

## Datos de ejemplo y pruebas

La interfaz incluye datos de demostración en `src/main.tsx`; reemplácelos por consultas Supabase al conectar el proyecto. Ejecute `npm test` para verificar cálculos de avance y reglas principales. La migración conserva historial con triggers, bloquea la modificación de la línea base y aplica archivado mediante `archived_at`.
