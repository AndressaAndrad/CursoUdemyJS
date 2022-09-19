exports.paginainicial = (req, res) => {
    res.render('index.ejs');
};

exports.trataPost = (req, res) => {
    res.send(`Ola, sou sua nova rota de POST`);
};