// Funções Fábrica
// Função retorna objeto
// funcao dentro de um objeto se chama método
// Paradigma a Orientação a Objeto.
//Vantagens -> 
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter get mostra o valor.
        get  nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // A cada espaço ele separa os nomes e vira um array.
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`; // this chama a pessoa que esta se referindo
        },

        altura,
        peso,
        //  Getter, get só recebe

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

// const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// console.log(p1.nomeCompleto);
// console.log(p1.fala('falando sobre JS'));
// console.log(p1.imc);// Usando getter a funcao vira metodo
//          obj.atributo
console.log('---------------------------------------------------------------------')
const p2 = criaPessoa('Andressa', 'Andrade', 1.63, 68);
p2.nomeCompleto = 'Otavio Alves de Andrade';
console.log(p2.nome);
console.log(p2.sobrenome);
console.log('---------------------------------------------------------------------')
console.log(p2.nomeCompleto);
console.log(p2.fala('fazendo Curso na Udemy'));
console.log('---------------------------------------------------------------------')
console.log(p2.imc); 