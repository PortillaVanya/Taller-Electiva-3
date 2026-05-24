import { Router } from 'express';
import { query } from '../config/database.js';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT id, name, played, won, drawn, lost, goals_for, goals_against,
              (goals_for - goals_against) AS goal_difference, points
       FROM teams
       ORDER BY points DESC, goal_difference DESC, goals_for DESC`
    );
    res.json({
      league: 'Liga FutbolStats Pro',
      updatedAt: new Date().toISOString(),
      standings: rows,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
