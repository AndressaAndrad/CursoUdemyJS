function Produto(nome, preco, estoque) {
    this.nome = nome; // Torando publico
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {  // não deixando ser alterado
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: false,  // pode ou não ser alterado.
        configurable: true //configuravel se pode apagar ou não
    });
}

const p1 =new Produto ('Camiseta', 20, 3);
console.log(p1)