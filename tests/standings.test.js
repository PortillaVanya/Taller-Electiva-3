import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/standings', () => {
  it('devuelve la tabla de posiciones ordenada por puntos', async () => {
    const res = await request(app).get('/api/standings');

    expect(res.status).toBe(200);
    expect(res.body.league).toBe('Liga FutbolStats Pro');
    expect(Array.isArray(res.body.standings)).toBe(true);
    expect(res.body.standings.length).toBeGreaterThan(0);
    expect(res.body.standings[0]).toMatchObject({
      name: 'Test FC',
      points: 10,
    });
  });
});
