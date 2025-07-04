import request from 'supertest';
import app from '/app'; 

describe('GET /users', () => {
  it('should return an array of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /users/:id', () => {
  it('should return 400 if id is invalid', async () => {
    const res = await request(app).get('/users/abc');
    expect(res.statusCode).toBe(400);
  });

  it('should return a user if id is valid', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });
});
