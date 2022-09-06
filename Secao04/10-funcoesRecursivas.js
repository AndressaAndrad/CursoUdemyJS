// Função recursiva -> que se chama, retorna ela mesmo.

function recursiva(max) {  
    console.log(max);       //mostrando
    if (max >= 10) return; // condição de parada 
    max++;                  // incrementando
    recursiva(max);         // retornando
}

recursiva(0);