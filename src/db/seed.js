import 'dotenv/config';
import { query, closePool } from '../config/database.js';

const TEAMS = [
  { name: 'Atlético Putumayo', played: 10, won: 7, drawn: 2, lost: 1, goals_for: 21, goals_against: 8, points: 23 },
  { name: 'Deportivo Orinoquía', played: 10, won: 6, drawn: 3, lost: 1, goals_for: 18, goals_against: 9, points: 21 },
  { name: 'Club Amazonas FC', played: 10, won: 5, drawn: 2, lost: 3, goals_for: 15, goals_against: 12, points: 17 },
  { name: 'Unión Mocoa', played: 10, won: 4, drawn: 3, lost: 3, goals_for: 14, goals_against: 14, points: 15 },
  { name: 'Real Villavicencio', played: 10, won: 3, drawn: 2, lost: 5, goals_for: 11, goals_against: 16, points: 11 },
  { name: 'Sportivo Caquetá', played: 10, won: 1, drawn: 2, lost: 7, goals_for: 7, goals_against: 27, points: 5 },
];

async function seed() {
  await query('DELETE FROM teams');
  for (const team of TEAMS) {
    await query(
      `INSERT INTO teams (name, played, won, drawn, lost, goals_for, goals_against, points)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        team.name,
        team.played,
        team.won,
        team.drawn,
        team.lost,
        team.goals_for,
        team.goals_against,
        team.points,
      ]
    );
  }
  console.log('Seed completado:', TEAMS.length, 'equipos');
  await closePool();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
