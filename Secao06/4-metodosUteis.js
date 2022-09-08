/**
        Object.values   (le so os valores)
        Object.entries  (le em um arrays, pega dois valores)
        Object.assign(des, any)
        Object.getOwnPropertyDescriptor(o, 'prop')
        ...(spread)

        Object.keys(retorna as chaves)
        Object.freeze (congela o objeto)
        Object.defineProperties (define várias propriedades)
        Object.defineProperty (define uma propriedades)
*/

console.log('-------------------------------------------Object.assign----------------------------------');
const produto = {nome: 'Caneca', preco: 1.8};
/**
         const copiando = { // copiando o do original 
            ...produto,  //espalhando
            material: 'porcelana' // criando uma chave
        }; 
 */ //a mesma coisa usando o assign()
const caneca = Object.assign({}, produto, {material: 'porcelana'}); // copiar objeto

caneca.nome = 'Copiei e mudei';
caneca.preco = 3.6;
console.log(caneca);
console.log(produto);

console.log('\n');
console.log('-------------------------------------------Object.getOwnPropertyDescriptor----------------------------------\n\n');

const produto1 = {nome: 'Caneca', preco: 1.8};
Object.defineProperty(produto1, 'nome', {  //configuro 
    enumerable: true,
    writable: true,
    configurable: true

});
console.log(Object.getOwnPropertyDescriptors(produto1)); // mostra a configuracao


console.log('\n');
console.log('-------------------------------------------Object.entries----------------------------------\n\n');
console.log(Object.entries(produto1));

for (let [chave, valor] of Object.entries(produto1)) {  // descontruir o array 
    console.log(chave, valor);
}


