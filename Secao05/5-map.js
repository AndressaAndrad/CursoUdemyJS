// Map -> mapeando Arrays
// Dobre os números

const numeros = [10, 15, 23, 1, 056, 4, 8, 12, 456, 0, 8, 98];
const numeroEmDobro = numeros.map((valor) => (valor * 2)); 

console.log(numeroEmDobro);


//Para cada elemento:

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
];

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({idades: obj.idade}));
console.log(idades);

//Adicione uma chave id em cada objeto sem alterar o original
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj} 
    newObj.id = (indice + 1000) * 1;
    return newObj;
});
console.log(comIds);
