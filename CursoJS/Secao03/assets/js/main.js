const form = document.querySelector('.form');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido.', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida.', false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log(imc);
});

function getImc(peso,altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);

}

function criarParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criarParagrafo();
    p.innerHTML = mensagem;
    resultado.appendChild(p);

}
