// IIfe -> Immediately Invoked Function Expression
// Portugues Função Imediata

(function (idade, peso, altura) { //cria função anonima

    const sobrenome = 'Andrade';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Andressa'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(26, 68, 1.63); //chama a função