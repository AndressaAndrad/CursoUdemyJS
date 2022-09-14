function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no ERRO'); // um promessa rejeitada cai no catch
                return;
            } 

            resolve(msg.toUpperCase() + ' - Passei na promise');     /// executa com then
            return;
        }, tempo);
    });
}

// metodos melhores para trabalhar com promises
// Promise.all -> resolva todas as promises e me retorna um THEN
// Promise.race -> retorna a primeira promise resolvida
// Promise.resolve -> cai no THEN
// Promise.reject -> cai no CATCH


    // const promises = [
    //    'Primeiro valor',
    //     esperaAi('Promise 01', aleatorio(1, 5)),
    //     esperaAi('Promise 02', aleatorio(1, 5)),
    //     esperaAi('Promise 03', aleatorio(1, 5)),
    //     esperaAi(1000, 1000), // Teste para ver o erro
    //     'Outro valor'
    // ];
    
    // Promise.all(promises)
    //     .then((valor) => {
    //         console.log(valor);
    //     })
    //     .catch((erro) => {
    //         console.log(erro);
    //     });
    
    
        // Promise.race(promises)
        // .then((valor) => {
        //     console.log(valor);
        // })
        // .catch((erro) => {
        //     console.log(erro);
        // });
        
   function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
   } 


   baixaPagina()
   .then(dadosPagina => {
    console.log(dadosPagina);
   })
   .catch(e => console.log('ERRO', e));
