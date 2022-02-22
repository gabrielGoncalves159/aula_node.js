// const fs = require('fs');
// const path = require('path');

// const filePath = path.join('file.txt');

// Atividade com READFILE ==============================
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     console.log('Exercicio readFile\n', data);
// });
// =====================================================

// Atividade com READFILESYNC ==========================
// const data = fs.readFileSync(filePath, 'utf-8');
// console.log('Exercício readFileSync\n', data);
// =====================================================

// Atividade com PROMISE ===============================

function validar(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('O teste deu bom ' + nome);
        }, 5000);
    });
}

validar('Gabriel').then((res) => { console.log(res); });
// =====================================================