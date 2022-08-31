// Escreva uma função que recebe 2 números e retorne o maior deles

/* Eu fiz assim 

        const num1 = 10;
        const num2 = 20;

            if (num1>num2){
                console.log(`O maior número é: ${num1}.`);
            } else {
                console.log(`O maior número é: ${num2}.`);
            }
*/


// Resolução 01
            /*
                function max(x, y) {
                    if (x > y) {
                        return x;
                    } else {
                        return y;
                    }
                }
            */
// Resolucao 02
            /*
                function max(x, y) {

                    return x > y ? x : y;
                    
                }
            */

// Resolucão 03

const max2 = (x, y) => x > y ? x : y;
console.log(max2(100, 20));