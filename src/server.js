import 'dotenv/config';
import app from './app.js';
import { getPool } from './config/database.js';

const PORT = Number(process.env.PORT) || 3000;

let server;

async function bootstrap() {
  getPool();
  server = app.listen(PORT, () => {
    console.log(`FutbolStats Pro escuchando en puerto ${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('No se pudo iniciar el servidor:', err.message);
  process.exit(1);
});

const gracefulShutdown = (signal) => {
  console.log(`\nRecibida señal ${signal} — cerrando servidor elegantemente...`);
  if (server) {
    server.close(() => {
      console.log('Servidor HTTP cerrado');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
