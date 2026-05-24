import 'dotenv/config';
import { getPool, closePool } from '../src/config/database.js';

beforeAll(async () => {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS teams (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      played INTEGER NOT NULL DEFAULT 0,
      won INTEGER NOT NULL DEFAULT 0,
      drawn INTEGER NOT NULL DEFAULT 0,
      lost INTEGER NOT NULL DEFAULT 0,
      goals_for INTEGER NOT NULL DEFAULT 0,
      goals_against INTEGER NOT NULL DEFAULT 0,
      points INTEGER NOT NULL DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await pool.query('DELETE FROM teams');
  await pool.query(
    `INSERT INTO teams (name, played, won, drawn, lost, goals_for, goals_against, points)
     VALUES ('Test FC', 5, 3, 1, 1, 10, 5, 10)`
  );
});

afterAll(async () => {
  await closePool();
});
