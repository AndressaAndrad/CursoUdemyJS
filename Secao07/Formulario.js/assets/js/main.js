class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formuário enviado.');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senha e repetir senha precisa ser iguais.');
            this.criaErro(repetirSenha, 'Senha e repetir senha precisa ser iguais.');

        }

        if(senha.value.length <6 || senha.value.length >12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 a 12 caracteres.');
        }
        return valid;
    }

    camposSaoValidos() { // validando campos vazios
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) { // para não repetir msg de erro.
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deverá ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário só poderá conter letras e/ou números.');
            valid = false;
        }

        return true;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) { // verificando se cada campo esta vazio e guardar msg
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();