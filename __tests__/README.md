# Documentação

Documente aqui o que é necessário ser realizado para que o teste rode em uma máquina zerada.

# Teste Unitário
npm i --save-dev jest cross-env
"test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
pasta teste e um arquivo index.test.js
Execute npm test

# Teste Api
npm i supertest --save -dev 


# Rodar Tudo
npm test


