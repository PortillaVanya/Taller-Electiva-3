import 'dotenv/config';
import app from './app.js';
import { getPool } from './config/database.js';

const PORT = Number(process.env.PORT) || 3000;

async function bootstrap() {
  getPool();
  app.listen(PORT, () => {
    console.log(`FutbolStats Pro escuchando en puerto ${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('No se pudo iniciar el servidor:', err.message);
  process.exit(1);
});
