const nome = 'Luiz'; //criando e exportando
const sobrenome = "Miranda";
const idade = 30;

function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade, soma};

export default class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}