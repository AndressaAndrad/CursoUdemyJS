const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return; //checkando

    await this.userExists(); 

    if (this.errors.length > 0) return; // não deixando o email se repetir no banco de dados

    const salt = bcryptjs.genSaltSync(); //gerando uma senha e registrar usuario
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    
    try {
      this.user = await LoginModel.create(this.body);
    } catch (error) {
      console.log(error)
    }
  }

  async userExists() {
    const user = await LoginModel.findOne({email: this.body.email}); // metodo para ver se ja existe o email
    if(user) this.errors.push('Usuário já existe.');
  }

  valida() {
    this.cleanUp();
    // Validação o email e senha 
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 a 50 caracteres.');
    }
  }

  cleanUp() {  // limpar os objetos
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = { // garantindo se os campos vai ter somente o campo que desejo
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
