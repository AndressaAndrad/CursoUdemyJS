const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

// Rotas da Home
//                middlewares
route.get('/', homeController.paginainicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginainicial);

module.exports = route;