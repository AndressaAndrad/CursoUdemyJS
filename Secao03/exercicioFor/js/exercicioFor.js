const elementos = [
    {tag : 'p', texto: 'Escreva uma frase.'},
    {tag : 'div', texto: 'dois'},
    {tag : 'section', texto: 'tres'},
    {tag : 'footer', texto: 'quatro'},
];



// querySelector seleciona o primeiro elemento
const container = document.querySelector('.container');
// Criando uma div no html.
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);