// Vamos criar um produto
// Camiseta, caneca, lapis

function Produto(nome, preco) { //classe pai
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
};

function Camiseta(nome, preco, cor) { // classe filho herdando produto(pai)
    Produto.call(this, nome, preco);
    this.cor = cor;                     // coisa especifica
}

//linkar camiseta nos prototype de produtos
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return 'Número inválido';
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Arroz', 150);
const camiseta = new Camiseta('Regata', 10, 'Preta');
const caneca = new Caneca('Caneca Coração', 50, 'Porcelana', 5);
caneca.estoque = 100;
console.log(produto);
console.log(camiseta);
console.log(caneca);

