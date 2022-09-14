function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE'); // um promessa rejeitada cai no catch
        setTimeout(() => {
            resolve(msg);     /// executa com then
        }, tempo);
    });
}

esperaAi('Conexão com o BD', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(3232, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da Base', aleatorio(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO', e);
    });

