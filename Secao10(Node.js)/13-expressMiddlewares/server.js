const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middlewares');


//PADRÃO FULL MVC
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('views engine', 'ejs');

//Nosso próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
}); 