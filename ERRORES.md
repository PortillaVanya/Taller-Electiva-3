# Los 7 errores críticos — FutbolStats Pro

Documento para el video: qué fallaba y cómo se corrigió.

| # | Área | Error típico del starter | Solución aplicada |
|---|------|--------------------------|-------------------|
| 1 | **Dockerfile** | Imagen `node:18` o `latest`, sin multi-stage, `npm install` sin lockfile | `FROM node:24-slim`, `npm ci --omit=dev`, `EXPOSE 3000` |
| 2 | **docker-compose** | `DATABASE_URL` con host `localhost` en lugar del nombre del servicio | `postgres://futbol:futbol123@db:5432/futbolstats` + `depends_on` con `healthcheck` |
| 3 | **docker-compose** | Sin volumen persistente para PostgreSQL | Volumen `postgres_data:/var/lib/postgresql/data` |
| 4 | **Código / health** | Ruta `/health` en vez de `/api/health` | Router montado en `/api/health` (Render `healthCheckPath`) |
| 5 | **CI** | Workflow sin servicio PostgreSQL en GitHub Actions | Bloque `services.postgres` + `DATABASE_URL` en `env` |
| 6 | **CI** | `npm install` sin caché o Node incorrecto | `actions/setup-node@v4` con Node 24 + `npm ci` |
| 7 | **Render / prod** | Sin `render.yaml`, `DATABASE_URL` hardcodeada o SSL mal configurado | Blueprint con DB gestionada + `fromDatabase.connectionString` y SSL en producción |

## Comandos de diagnóstico usados

```bash
docker compose config    # validar compose
docker compose logs api  # ver fallos de conexión DB
npm test                 # Jest local/CI
curl http://localhost:3000/api/health
curl http://localhost:3000/api/standings
```
