const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaTarefa(textoInput) { // funcao que pega  valor do clique botao tarefa
    const li = criaLi();
    li.innerText = textoInput;   // coloca o valor na html (na tela)
    tarefas.appendChild(li);
    limpaInput();               //limpa o input
    criaBotaoApagar(li);        
    salvarTarefas();
}

function criaLi() { //funcão somente para criar li para o html
    const li = document.createElement('li');
    return li;
}

function limpaInput() { // funcao limpa input
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) { //função que cria botao para apagar a tarefa
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');    // colocando uma classe no botao
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar' , '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);   // arrays vira stings
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');   
    const listaDeTarefas = JSON.parse(tarefas);          //volta a ser arrays

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

inputTarefa.addEventListener('keypress', function (evento) { // se precionar enter ele tbm salva
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function () { // se clicar no botao ele salva
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(evento){

    const elemento = evento.target;

    if (elemento.classList.contains('apagar')) {  
        elemento.parentElement.remove();            // apaga o li inteiro que foi criado 
        salvarTarefas();
    }
});

adicionarTarefasSalvas();
