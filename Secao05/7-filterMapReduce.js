//Retorne a soma do dobro de todos os pares
//-> Filtrar pares
//-> Dobrar os valores
//-> Reduzir (somar tudo)



const numeros = [10, 15, 23, 1, 056, 4, 8, 12, 456, 0, 8, 98];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce(((acumulador, valor) => acumulador += valor));
console.log(numerosPares);
