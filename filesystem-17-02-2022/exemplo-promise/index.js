// EXEMPLOS =============================================================
// const fs = require("fs");
// const path = require('path');

// const filePath = path.join(__dirname, 'file.txt');
// const t1 = Date.now();

// const data = fs.readFileSync(filePath, 'utf-8');
// const lines = data.split('\n'); 
// console.log('Isso tá rodando dps do readFileSync\n', lines [1]); 
// console.log('tempo dps do readFileSync: ', (Date.now() - t1) / 1000);

// function readCallback(_, data) {
//     const lines = data.split('\n');
//     console.log('Isso tá rodando no callback do readFile\n', lines [0]);
//     console.log('tempo dentro do cb: ', (Date.now() - t1) / 1000); 
// }

// fs. readFile(filePath, 'utf-8', readCallback); 
// console.log('e aqui tem algo mto importante pra rodar tbm!'); 
// console.log('tempo antes do cb: ', (Date.now() - t1) / 1000);
// =========================================================================


// EXEMPLO DOIS ============================================================
// const fs = require('fs'); 
// const path = require('path');

// const filePath = path.join(__dirname, 'file.txt');
// fs. readdir(__dirname, (err, data) => { 
//     data
//     .filter(p => p !== 'file.txt')
//     .forEach(p => {
//         const newPath = path.join(__dirname, p);
//         fs.readFile(newPath, 'utf-8', (err, data) => {
//             console.log(
//                 'arquivo:',
//                 p,
//                 '\nconteúdo:',
//                 data

//             );
//         })
//     });
// });
// =========================================================================

// EXEMPLO COM PROMISE =====================================================

const fsPromise = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');
// fsPromise
//     .readFile(filePath, 'utf-8')
//     .then(res => {
//         const lines = res.split('\n');
//         console.log(lines[0]);
//     })
//     .catch(err => {
//         console.log('erro', err);
//     });

// OR

//     async function leArquivoAsync() {
//         const data = await fsPromise.readFile(filePath, 'utf-8');
//         const lines = data.split('\n');
//         console.log('[leArquivoAsync]', lines[0]);
//     }

// leArquivoAsync();

// COM TRY CATCH ==============================================================

async function leArquivoAsync() {
    try{
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    return lines[0];
    } catch (err) {
        throw new Error('não deu para ler :-(');
    }
}

leArquivoAsync().then(res => { console.log(res); });