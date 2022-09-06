//Valor por referência

/**
   const nomes = new Array('Eduardo', 'Maria', 'Amanda'); // construtor
*/

const nomes = ['Andresa', 'Maria', 'João', 'Moana', 'Muriel'];
const novo = [...nomes];
const novo1 = nomes.slice(0, 3); // seleciona o que quer ver dos indices do arrays
novo.pop(); // remove o elemento do final 
novo.shift(); // remove o elemento no inicio
novo.push('José'); // adiciona no final
novo.unshift('Wallace'); // adiciona no inicio



console.log(novo);
console.log(nomes);
console.log(nomes.length); // quantidade
console.log(novo1);

/**
 *    nomes[2] = 'José';  //Alterando
 *     delete nomes[1];   // Deixando um vazio
 */