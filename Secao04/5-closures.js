/*
    é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 */

function retornaFuncao() {
    return function() {      // funcao anonimas
        return nome;
    };
}

const funcao = retornaFuncao('Luiz'); // closures o nome Luiz
const funcao2 = retornaFuncao('Andressa'); //closures que pode ser Andressa
console.log(funcao);
console.log(funcao2);