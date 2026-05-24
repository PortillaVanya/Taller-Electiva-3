#!/bin/sh
set -e

echo "Esperando PostgreSQL..."
until node -e "
import('pg').then(({ Client }) => {
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  return c.connect()
    .then(() => c.end())
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
});
" 2>/dev/null; do
  sleep 2
done

echo "Ejecutando migración y seed..."
node src/db/migrate.js
node src/db/seed.js

exec "$@"
