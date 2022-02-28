// Extra
// - Criar 3 arquivos .txt e inserir algum conteúdo neles
// - Ler os 3 ao mesmo tempo e imprimir o resultado quando todos retornarem
// - Ler os 3 ao mesmo tempo e imprimir o resultado assim que a primeira Promise resolver

const fsPromise = require('fs').promises;
const path = require('path');

(async () => {
    const folderPath = path.join(__dirname);
    const allFiles = await fsPromise.readdir(folderPath);
/*
    allFiles = [
        '.cache',
        '.replit',
        '.upm',
        'file1.txt',
        'file2.txt',
        'file3.txt',
        'index.js',
        'replit.nix'
    ]
*/ 

const txtFiles = allFiles.filter(file => file.endsWith('.txt'));
// [ 'file1.txt', 'file2.txt', 'file3.txt' ]

// para cada arquivo dentro de txtFiles
// retorna a Promise criada com o readFile
const readPromises = txtFiles.map(txtFile => {
    const filePath = path.join(__dirname, txtFile);
    return fsPromise.readFile(filePath, 'utf-8');
});

// for (let i = 0; i <txtFiles.length; i++) {
//     const txtFile = txtFiles[i];
//     const filePath = path.join(__dirname, txtFile);
//     const readFilePromise = fsPromise.readFile(filePath, 'utf-8');
//     resourceLimits.push(readPromise);
// }

// espera finalizar todas as leituras de arquivo
// [
//  Promise(readFile('file1.txt')),
//  Promise(readFile('file2.txt')),
//  Promise(readFile('file3.txt'))
//]
const contents = await Promise.all(readPromises);
console.log(
    'all.content:\n',
    contents.join('\n'),
    '\n---------------\n'
);

// Promiise.race retorna a primeira promise a resolver ou rejeitar
const firstToResolve = await Promise.race(readPromises);
console.log(`first to resolve was: ${firstToResolve}`);
}) ();