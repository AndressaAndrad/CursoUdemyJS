/* Exercicio

Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Andressa';
const sobrenome = 'Andrade';
const idade = 26;
const peso = 68;
const alturaEmM = 1.63;
let indiceMassaCorporal;
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

// Potenciação

let num1= 10;
let num2= 2;
let pot= num1 ** num2;

console.log(pot);



