function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', 
    {hour12: true});
}
//colocando em uma variavel
const timer = setInterval(function (){          //  função anonima
    console.log(mostraHora());
}, 1000);                         // Executando em segundos

setTimeout (function() {
    clearInterval(timer);
}, 3000);       // executando em 6 segundos

setTimeout (function() {
    console.log('Olá Mundo!');
}, 5000); 

/*

*/


