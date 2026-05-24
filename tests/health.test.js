import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/health', () => {
  it('responde 200 con estado ok y base de datos conectada', async () => {
    const res = await request(app).get('/api/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.service).toBe('FutbolStats Pro');
    expect(res.body.database).toBe('connected');
  });
});
