function* gerador1() { // funcao que retona resultado em partes(pausa)
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';

}

const g1 = gerador1();
// console.log(g1.next().value); // value só mostra o valor
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next()); // mostra que terminou a função


for (let valor of g1) {     // for mostra executa até o final 
    console.log(valor); 
}


function* geradora2() { 
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora3();
for (let valor of g3) {
    console.log(valor);
}

function* geradora4() {
    yield function() { // yield pausa a funcao ja o return para.
        console.log('Vim do y1');
    };

    yield function() {
        console.log('Vim do y2');
    };
}

const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1();
func2();
