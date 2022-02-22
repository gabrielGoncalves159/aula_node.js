// EXEMPLO EXPORTAR COMO DAFAULT ======================================

// function maiorDeIdade(idade) {
//     idade = Number.parseInt(idade); // NaN
//     if (Number.isNaN(idade)) {
//         throw new Error('input invalido');
//     }

//     return idade >= 18;
// }
// module.exports = maiorDeIdade;
// =====================================================================

// EXEMPLO EXPORTAR COMO OBJETO (NAME) ======================================

function maiorDeIdade(idade) {
    idade = Number.parseInt(idade); // NaN
    if (Number.isNaN(idade)) {
        throw new Error('input invalido');
    }

    return idade >= 18;
}

function imprimeIdade(idade){
    console.log('\nA idade é ${idade}');
}

module.exports = {
    maiorDeIdade,
    imprimeIdade,
};

// =====================================================================

// EXERCICIO READLINE ==================================================
const readline = require('readline');
const figlet = require('figlet');

function verificaIdade(idade) {
    return Number.parseInt(idade) >= 18;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Qual idade verificar?', (idade) => {
    const msg = verificaIdade(idade) ? 'Maior' : 'Menor';

    figlet(msg, function (err, data) {
        console.log(data);
        rl.close();
    })
});

// =====================================================================
