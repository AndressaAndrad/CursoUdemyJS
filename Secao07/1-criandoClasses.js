// Classe

class Pessoa { // construtor 
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
// os metodos fica dentro do proto
    falar() {
        console.log(`${this.falar} está falando`);
    }
}

// molde
const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);

// FUNÇÃO CONSTRUTORA



function Pessoa2 (nome, sobrenome) { // Construtor
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() { //Métodos
    console.log(`${this.falar} está falando`);
}

const p2 = new Pessoa2('Andressa', 'Miranda'); //Molde
console.log(p2);