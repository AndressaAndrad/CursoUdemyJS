// RETURN 
//Retorna um valor
//Termina a função

function soma(a, b) {
    return a + b;
}

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');

console.log(p1);

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }


// Uma função que retorna um outra funcao anonima
function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(1));