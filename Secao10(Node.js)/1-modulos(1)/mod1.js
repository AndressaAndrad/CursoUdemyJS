// const nome = "Luiz";
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;

// ///module.exports.nome = nome;   // Exporta o modulo com o objeto nome...

// exports.nome = nome; // Tbm exporta os dados.
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// //this.pode ser exportados 'não é muito usado'

// //console.log(exports);


//---CLASSES

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Pessoa = Pessoa; //Exporta ..