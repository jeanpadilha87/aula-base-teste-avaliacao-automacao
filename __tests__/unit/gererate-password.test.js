const generatePassword = require('../../src/fns/generate-password');
describe('generate-password', () => {
   it('deve retornar uma string', () => {
       const password = generatePassword();
       expect(typeof password).toBe('string');
   });
   it('deve gerar uma senha', () => {
       const password = generatePassword();
       expect(password.length).toBe(36);
   });
   it('deve gerar senhas diferentes', () => {
       const password1 = generatePassword();
       const password2 = generatePassword();
       expect(password1).not.toBe(password2);
   });
});
