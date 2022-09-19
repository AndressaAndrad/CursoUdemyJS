exports.paginainicial = (req, res) => {
    res.send(`
    <form action= "/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar Formulário</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send(`Ola, sou sua nova rota de POST`);
};