const path = require('path'); // CommonJS

//Exportar
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js')
    },
    module: {
        rules: [{ //regras
            exclude: /node_modules/,
            test: /\.js$/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};