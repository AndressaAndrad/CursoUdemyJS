// new Object -> Object.prototype

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
const p1 = new Produto('Camisa', 50);
const p2 = new Produto('Bermuda', 100);
p1.desconto(50);
console.log(p1);
p2.aumento(25);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco : {
        writable: true,
        configurable: true,
        enumerable:  true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(25);
console.log(p3);
