//____________________FILE SYSTEM

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}



async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue; // exclui tudoq ue tem .git
        if(/node_modules/g.test(fileFullPath)) continue; // exclui tudoq ue tem node_modules

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        };

        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
            ) continue; //pesquisa tudo que tem css
        console.log(fileFullPath);
    }
}

readdir('C:/CursoJS//'); // em windows