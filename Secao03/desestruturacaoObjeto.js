const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação

// const {nome, sobrenome} = pessoa;
// console.log(nome, sobrenome);

// const {endereco: {rua, numero}}  = pessoa;
// console.log(rua,numero);

const {nome, ...resto}  = pessoa;
console.log(nome, resto);