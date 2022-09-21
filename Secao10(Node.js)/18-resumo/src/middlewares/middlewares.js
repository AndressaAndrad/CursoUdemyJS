exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da varíavel local.';
    next();
};

exports.checkCsrfError =(err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code ) {
        return res.render('404.ejs');
    }
};

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};


