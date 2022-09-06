const nomes = ['Andresa', 'Maria', 'João', 'Moana', 'Muriel'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// const removidos = nomes.splice(3, 2); // removendo
console.log(nomes);

const adicionando = nomes.splice(3, 2, 'Marcelo', 'Antonia'); // Subtitui o nome no indice desejado
console.log(nomes, adicionando);

const removidos = nomes.splice(-2, Number.MAX_VALUE); // removendo do indice ate o infinito
console.log(nomes, removidos);

//PUSH

    nomes.splice(nomes.length, 0, 'Cleuza', 'Antonio');
    console.log(nomes);

// UNSHIFT

    nomes.splice(0, 0, 'Fabio');
    console.log(nomes);
