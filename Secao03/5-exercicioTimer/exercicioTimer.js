const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

//codigo mais limpo

document.addEventListener('click', function (evento) {
    const elemento = evento.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

});

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDossegundos(segundos);
    }, 1000);
}

function criaHoraDossegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hours12: false,
        timeZone: 'UTC'
    });
}

/*  formar mais explicativa  

    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    iniciar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function (evento) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/