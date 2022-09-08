//defineProperty -> Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome; // Torando publico
    this.preco = preco;


    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, //configuravel
        get: function () {  //  exibi o valor
            return estoquePrivado;
        },
        set: function (valor) { // pega o valor e confere se é um numero
            if (typeof valor !== 'number') {
                throw new TypeError('Numero Inválido');  // mensagem de erro 
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1)
p1.estoque = 05;
console.log(p1.estoque);