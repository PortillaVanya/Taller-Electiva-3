import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import standingsRouter from './routes/standings.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'FutbolStats Pro API',
    docs: { health: '/api/health', standings: '/api/standings' },
  });
});

app.use('/api/health', healthRouter);
app.use('/api/standings', standingsRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;
