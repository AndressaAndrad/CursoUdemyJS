const _velocidade = Symbol('velocidade'); //Privada 

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) { 
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor ;

    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }


console.log(c1.velocidade);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor) {
        console.log('SETTER');
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

    get nomeCompleto() {
        console.log('GETTER');
        return this.nome + ' ' + this.sobrenome;
    }
}

const p1 = new Pessoa('Andressa' , 'Andrade');
const p2 = new Pessoa();
p2.nomeCompleto = 'Luiz Miranda';
console.log(p1);
console.log(p2.nome);
console.log(p2.sobrenome);
