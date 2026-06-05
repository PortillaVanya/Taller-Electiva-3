# FutbolStats Pro

API REST en Node.js/Express con PostgreSQL para consultar la **tabla de posiciones** en vivo.

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Health check (Render + monitoreo) |
| GET | `/api/standings` | Tabla de posiciones |

## Inicio rápido (local)

```bash
cp .env.example .env
npm ci
# Con PostgreSQL en localhost:5432 (ver .env.example)
npm run db:migrate && npm run db:seed
npm start
```

## Docker Compose

```bash
docker compose up --build
```

API: http://localhost:3000/api/standings

## Tests

```bash
npm test
```
Autores 
Vanya Catalina Portilla Sanchez
Andres Alirio Burbano Solarte 
Franklin Sneider Cordoba De La Cruz 


## Despliegue en Render

1. Sube el repo a GitHub.
2. En Render: **New → Blueprint** y selecciona `render.yaml`.
3. En el Web Service → **Settings → Build & Deploy**: activa **Auto-Deploy** y **Deploy only after CI checks pass**.
4. Verifica `healthCheckPath: /api/health` en el blueprint.

## Los 7 errores críticos (y su solución)

Ver [ERRORES.md](./ERRORES.md) — guía para el video demostrativo.

## Entregables del taller

- Repositorio en GitHub
- URL pública en Render (`/api/standings`)
- `arquitectura.png` en la raíz
- Video ≤ 5 min
