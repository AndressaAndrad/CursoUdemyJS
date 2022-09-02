// Declaração de função (Function hoisting)
// Todas são tratadas como objeto de primeira classe.

function falaOI() {
    console.log('Oie');
}
falaOI();


// First-class objetcs (Objetos de primeira classe)
// Function expression

const souUmDado = function() {   // uma variavel virou uma função
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função '); 
    funcao();
}

executaFuncao(souUmDado); // Uma funcao executando dentro de outra funcao

// Arrow function

const funcaoArrow = ( ) => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Função dentro do um objeto
const obj = {
    falar() {
        console.log ('Estou falando...');
    }
};
obj.falar();