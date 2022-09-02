//..rest, spread

    // const numeros = [1000 ,2000 ,3000 ,4000 ,5000 ,6000 ,7000 ,8000 ,9];

    // //     indice 0         indice 1        indice 2       o resto do arrays
    // const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

    // console.log(primeiroNumero,segundoNumero,terceiroNumero);
    // console.log(resto);
//-----------------------------------------------------------------------------------------

//desestruturação por ARRAYS

    const numeros = [[1,2,3], [11,12,13], [21,22,23]];
    const [lista1, lista2, lista3] = numeros;
    console.log(lista3[2]);

// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A
// const numeros = [b,c,a];
// [a,b,c] = numeros;

// console.log(a,b,c);