const request = require('supertest');
const app = require('./index');

test('GET /menu returns menu items', async () => {
  const res = await request(app).get('/menu');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(4);
});

test('GET /orders returns empty array', async () => {
  const res = await request(app).get('/orders');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});