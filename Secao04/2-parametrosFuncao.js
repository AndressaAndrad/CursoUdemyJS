function funcao() {
    console.log('Oiee'); // ignora os parametros
    console.log(arguments); // aqui esta todo os parametro colocado 
}

// argumentos que sustenta toods os argumentos enviados
// nâo funciona em arrow function
function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3);

function soma (a, b = 2 ) {  // se não coloca parametro ele retorna NaN. Padrao mais atual
   // b = b || 0;          coloca padrao mas é uma forma antiga
    console.log(a + b) 
}
soma(2)

// Desestruturação e tirando o nome do objeto
function pessoa({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

pessoa({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});


// rest parameter faz resto dos dados virar uma arrays
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}
conta('+', 2, 30, 40, 50);


// Nessa função posso ver que usando o rest da fazer calculos com o restante dos numeros 
//function expression
const contaNumeros     = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
contaNumeros('*', 2, 3, 4, 50);


