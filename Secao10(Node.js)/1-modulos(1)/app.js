//------------------------Importar------------------------//

// const fala = require('./mod1');
// console.log(mod1.falaNome());


// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());


const { Pessoa } = require('./mod1');
const path = require('path'); // modulos proprio do NODE.js
const axios = require('axios');

const p1 = new Pessoa('Andressa', 'Andrade');
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));