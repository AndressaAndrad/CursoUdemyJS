const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); // tratar os bodys 


// http://facebook.com/profiles/otaviomiranda <-- url params

app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action= "/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?',(requisicao, resposta) => {
    console.log(requisicao.params);
    console.log(requisicao.query);
    resposta.send(requisicao.query.nome);
});

app.post('/', (requisicao, resposta) => {
    console.log(requisicao.body);
    resposta.send(`O que você me enviou foi : ${requisicao.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
}); 