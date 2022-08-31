const nome = 'Andressa';
const nomes= ['Maria', 'João', 'José', 'Aquino'];


/* for classico
        for (let i = 0; i< nome.length; i++){
            console.log(nome[i]);
        }
 */

       /* for usando in simplificada precisando o indice
             for (let i in nome){
             console.log(nome[i]);
            }
       */

            /* for of
                for (let valor of nomes) {
                    console.log(valor); 
                 }
            */

                // traz o valor, indice e array completo
                    nomes.forEach(function(valor, indice, array) {
                        console.log(indice,valor, array);
                    }); 
                

                
