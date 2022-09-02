const numeros = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 2, 10];

for (let numero of numeros) {

    if (numero === 2){ //continue viu que é verdadeiro e pulou o numero 2 e pulou para a proxima
        console.log('Pulei o número dois');
        continue;
    }

    if (numero === 7 ){
        console.log('Parei no número 7');
        break;
    }
    console.log(numero);
}