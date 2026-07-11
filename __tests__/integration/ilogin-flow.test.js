const request = require('supertest');
const app = require('../../index');
describe('Fluxo de Login', () => {
   it('deve realizar login e receber um token JWT', async () => {
       const response = await request(app)
           .post('/api/v1/login')
           .send({
               email: 'admin@email.com',
               password: '123456'
           });
       expect(response.statusCode).toBe(200);
       expect(response.body.token).toBeDefined();
   });
});