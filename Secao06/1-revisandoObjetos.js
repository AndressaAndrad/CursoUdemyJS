// Revisão 

const pessoa = { // Corpo do objeto
    nome: 'Andressa',
    sobrenome: 'Andrade',
    idade: 26
};

console.log(pessoa.nome); // acesso por chaves
console.log(pessoa.sobrenome);

const chave = 'nome';      // usando depende do caso
console.log(pessoa[chave]);

console.log('----------- new Arroy ()');
const pessoa1 = new Object(); //Construtor
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {   //Literal
    nome: 'Andressa',
    sobrenome: 'Otavio'
};
delete pessoa1.nome; // apagar
console.log(pessoa1, pessoa2);

const pessoa3 = new Object(); //Construtor
pessoa3.nome = 'Maria';
pessoa3.sobrenome = 'Joaquina';
pessoa3.idade = 45;
pessoa3.falarNome = function () {
    return (`${this.nome} está falando seu nome.`)
};

pessoa3.getDataNascimento = function () { // Ano de nascimento
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa3.getDataNascimento());

for (let chave in pessoa3) {
    console.log(pessoa3[chave]);  // acessar valores
}


// Funcao molde para objetos
///  / Classes
console.log('----------- Factary functions ');

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa ('Amanda', 'Fatima');
p1.nome = 'Fui alterado';     
console.log(p1.nomeCompleto());

console.log('-----------Construtor functions ');
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//a palavra new objeto vazio {} <- this
const p2 = new Pessoa ('Luiz', 'Miranda');
Object.freeze(p2); // travando para não alterar
p2.nome = 'Fui alterado';
console.log(p2);








