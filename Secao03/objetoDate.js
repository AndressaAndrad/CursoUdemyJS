const data = new Date();
const dataBrasil =formataData(data);
console.log(dataBrasil);

// Funcao que formata a data

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;  // operacao ternaria e colocar zero na frente do numero 
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // Mês comeca do zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
