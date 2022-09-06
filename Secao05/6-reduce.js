//Reduce -> soma todos os valores da matriz

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números(reduce)
const total = numeros.reduce((acumulador, valor) => acumulador += valor);
console.log(total);

// Retorne os valores com os pares (Filter)

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

// Retorne um array com o dobro dos valores (Map)

const dobro = numeros.map(valor => valor * 2);
console.log(dobro);


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:89},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
     if(acumulador.idade > valor.idade) return acumulador;
     return valor; 
});

console.log(maisVelha);