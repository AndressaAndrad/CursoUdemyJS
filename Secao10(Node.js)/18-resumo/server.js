require('dotenv').config(); // refere ao arquivo .env que tenha coisa relacioanada ao ambiente de desenvolvimento sobre senha, usuario

const express = require('express'); // inicio do express
const app = express(); // inicio do express
const mongoose = require('mongoose'); // inicio do mongoose modelar banco de dados

mongoose.connect(process.env.CONNECTIONSTRING) // esquema como os dados tem que ser salvos
    .then(() => { // retorna uma promise
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session'); // salvar cookie e mandar e ver 
const MongoStore = require('connect-mongo'); //sessoes vão ser salvas dentro da base de dados
const flash = require('connect-flash'); //mensagems alto destruitvas, se le uam vez
const routes = require('./routes'); //rotas das aplicações 
const path = require('path'); //trabalhar com caminhos
const helmet = require('helmet'); // seguranca no express
const csrf = require('csurf'); // para os formulario precisa ter um csrfToken ngm de fora nao consegue postar
const {middlewareGlobal, checkCsrfError, crsfMiddleware} = require('./src/middlewares/middlewares'); // funcao executada nas rotas 


app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // acessar diretamente tudo que é estatico

const sessionOptions = session({
    secret: 'Andressa And And() ',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('views engine', 'ejs');

app.use(csrf());
//Nosso próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(crsfMiddleware);
app.use(routes);

app.on('Pronto', () => { 
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000');
    });
});