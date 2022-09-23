const mongoose = require('mongoose');
const validator = require('validator');

// criando tabela com um criterio obrigatorio que é nome os restante se estiver vazio sera salvo vazio
const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now }, // salvando com data atual 

});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function () {
  this.valida();
  if(this.errors.length > 0) return;
  this.conato = await ContatoModel.create(this.body);

}

Contato.prototype.valida = function () {
  this.cleanUp();
  // Validação
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
  if (!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos uma contato precisa ser enviado: e-mail ou telefone.');
  }
};

// limpar os objetos
Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  };

  // garantindo se os campos vai ter somente o campo que desejo
  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.buscaPorId = async (id) => {
  if (typeof id !== 'string') return;
  const user = await ContatoModel.findById(id);
  return user;
};

module.exports = Contato;
