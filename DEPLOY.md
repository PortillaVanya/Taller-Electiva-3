# Guía de entrega — FutbolStats Pro

## 1. GitHub

```bash
cd C:\Users\Usuario\Desktop\Taller
git add .
git commit -m "fix: corregir 7 errores de infraestructura y despliegue FutbolStats Pro"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/futbol-stats-pro.git
git push -u origin main
```

## 2. Render (Blueprint)

1. [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**.
2. Conecta el repositorio de GitHub y confirma `render.yaml`.
3. Tras el primer deploy, copia la URL del Web Service (ej. `https://futbolstats-api.onrender.com`).
4. **Settings → Build & Deploy**:
   - **Auto-Deploy**: On
   - **Deploy only after CI checks pass**: On (requiere conectar GitHub en Render).

## 3. Verificación

```bash
curl https://TU-SERVICIO.onrender.com/api/health
curl https://TU-SERVICIO.onrender.com/api/standings
```

## 4. Video (5 min) — guion sugerido

1. Mostrar `arquitectura.png` (30 s).
2. Recorrer `ERRORES.md`: los 7 errores y la corrección (2 min).
3. Pantalla de GitHub Actions en verde (1 min).
4. `curl` o navegador con `/api/standings` en Render (1 min).
5. Cierre con link repo + URL API (30 s).

## 5. Local (antes de grabar)

```bash
# Iniciar Docker Desktop primero
docker compose up --build
npm test   # con Postgres en localhost:5432 (compose o Laragon)
```
