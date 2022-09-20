exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log();
    console.log('Passei no outro middleware');
    next();
};

