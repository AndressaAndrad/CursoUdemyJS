const express = require('express');
const app = express();

// http://meusite.com/ <- GET -> Entrege a página

app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action= "/" method="POST">
    Nome do Cliente: <input type="text" name=""nome>
    <button>Enviar Formulário</button>
    </form>
    `);
});

app.get('/contato', (requisicao, resposta) => {
 resposta.send('Obrigado por entrar em contato com a gente.');
});

app.post('/', (requisicao, resposta) => {
    resposta.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
}); 