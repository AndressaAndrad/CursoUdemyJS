//Escreva uma função chamada ePaisagem que recebe dois argumentos
//largura e altura de uma imagem(number).
// Retorne true se a imagem estiver no modo paisagem.

// Eu fiz assim ..
    /*
            function ePaisagem(largura, altura) {
                return largura > altura ? true : false;
            }

            console.log(ePaisagem(200, 1000));
    */

// Resolução 01

            /*
                    function ePaisagem(largura, altura) {
                        return largura > altura;
                    }

                    console.log(ePaisagem(1920, 1080));

            */

//Resolução 02 

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(20, 1080));