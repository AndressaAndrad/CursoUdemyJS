/**
    Javascript é baseado em um prto´totipos para passar propriedades e métodos
    de um objeto para outro.

    Definição de protótipo
    Protótipo é p termo usado para se referir ao que foi criado pela priemira vez
    servindo de modelo ou molde futuras produções.

    Todos os objeto tem uma referência interna para um protótipo (__proto__) que vem da 
    propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos 
    acessar um membro no próprio objeto e depois a cadeia de protótipos é usada até o topo
    (null) até encontrar (ou não) tal membro.
 */


//Construtora -> molde (classe)

function Pessoa( nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}. `;
}

//Instância
//prototype esta linkado
Pessoa.prototype.nomeCompleto;

const pessoa1 = new Pessoa('Luiz', 'Andrade.') // <-Pessoa = Função construtora
const data = new Date(); // <-Pessoa = Função construtora

console.dir(pessoa1);
console.dir(data);

