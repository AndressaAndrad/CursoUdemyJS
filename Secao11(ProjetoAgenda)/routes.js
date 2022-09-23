const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js');
const contatoController = require('./src/controllers/contatoController.js');
const { loginRequired } = require('./src/middlewares/middleware'); // importando o middleware




// Rotas da home
route.get('/', homeController.index);

// Rotas login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas Cadastro
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/id', loginRequired, contatoController.editIndex);


module.exports = route;
