const request = require('supertest');
const app = require('../../index');
describe('API Login', () => {
   it('deve retornar token quando o login for válido', async () => {
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
