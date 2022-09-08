const a1 = [18 ,28 ,38 ,48 ,58 ,68 ,78 ,88 ,6];

// for (let valor of a1) { traz o valor
//     console.log(valor);
// }

a1.forEach((valor, indice, array) => console.log(indice, valor, array)); /// faz  igual o for só que simplificado.

let total = 0;
a1.forEach((valor) => total += valor); /// somando igual o reduce
console.log(total);
