//  FILTRAR ARRAYS -> Sempre vai retorna um arrays, com a mesma quantidade de elemnetos.

// Retorne os números maiores que 10
const numeros = [10, 15, 23, 1, 056, 4, 8, 12, 456, 0, 8, 98];
const numerosFiltrados = numeros.filter(valor => valor >= 15); 
///                                      callback em um array function
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
];

//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length > 5 );

//Retorne as pessoas com mais de 50 anos 
const pessoaMaiordeCinquenta =pessoas.filter(valor => valor.idade > 50);

//Retorne as pessoas cujo nome termina com a 
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoaComNomeGrande);
console.log(pessoaMaiordeCinquenta);
console.log(nomeTerminaComA);