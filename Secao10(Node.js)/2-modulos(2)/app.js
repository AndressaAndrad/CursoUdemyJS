const Cachorro = require('./B/C/D/mod');
const c1 = new Cachorro('DOG');
c1.latir();

console.log(__filename); 
console.log(__dirname);
const path = require('path');

console.log(path.resolve(__dirname, '..'));