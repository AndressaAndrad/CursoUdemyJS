// Forma mais reduzida 

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

// 

const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const semana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
    'quinta-feira', 'sexta-feira', 'sabado']
    return semana[diaSemana];
}

function getNomeMes(numeroMes){
     const meses = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return meses[numeroMes];
}
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;  // operacao ternaria e colocar zero na frente do numero 
}

function criarData(data){
    const semana = getDiaSemanaTexto(data.getDay());
    const mes = getNomeMes(data.getMonth());
    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = zeroAEsquerda(data.getMinutes());

    return (
        `${semana}, ${dia} de ${mes} de ${ano} ` +
        ` ${hora}:${minutos} .`
    )

}
h1.innerHTML = criarData(data);