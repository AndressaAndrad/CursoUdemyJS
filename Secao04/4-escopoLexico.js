const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {       // A funcao executa o que esta pedindo e nao o que foi declarado 
    const nome = 'Andressa';  //'tipo classe pai'
    falaNome();
}
usaFalaNome();