import { Router } from 'express';
import { query } from '../config/database.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    await query('SELECT 1');
    res.json({
      status: 'ok',
      service: 'FutbolStats Pro',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(503).json({
      status: 'error',
      service: 'FutbolStats Pro',
      database: 'disconnected',
    });
  }
});

export default router;
