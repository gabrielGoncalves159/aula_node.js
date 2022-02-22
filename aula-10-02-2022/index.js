// PRIMEIRO EXEMPLO ============
// function maiorDeIdade(idade) {
//     return idade >=18;
// }

// // console.log(maiorDeIdade(20)); // true
// console.log(maiorDeIdade("oof")); // false
// // ========================================

// // SEGUNDO EXEMPLO ========================
// function maiorDeIdade(idade) {
//     idade = Number.parseInt(idade); // NaN

//     return idade >=18;
// }

// // console.log(maiorDeIdade(20)); // true
// console.log(maiorDeIdade("oof")); // false
// // ========================================

// TERCEIRO EXEMPLO ========================
// function maiorDeIdade(idade) {
//     idade = Number.parseInt(idade); // NaN
//     if (Number.isNaN(idade)) {
//        throw new Error('input invalido');
//     }

//     return idade >=18;
// }

// console.log(maiorDeIdade(20)); // true
// console.log(maiorDeIdade("oof")); // false
// // ========================================

// QUARTO EXEMPLO ============================
// const args = process.argv.slice(2);
// const idade = args[2];
// // [node, script, 50]

// function maiorDeIdade(idade) {
//     idade = Number.parseInt(idade); // NaN
//     if (Number.isNaN(idade)) {
//         throw new Error('input invalido');
//     }

//     return idade >= 18;
// }

// const idade = args[0]
// console.log({args});
// console.log(maiorDeIdade(idade));
// ============================================

// QUINTO EXEMPLO ===============================
// const args = process.argv.slice(2);
// const idade = args[2];
// // [node, script, 50]

// function maiorDeIdade(idade) {
//     idade = Number.parseInt(idade); // NaN
//     if (Number.isNaN(idade)) {
//         throw new Error('input invalido');
//     }

//     return idade >= 18;
// }

// console.log(maiorDeIdade(idade));
// ============================================

// SEXTO EXEMPLO ==========================================================
// * Exemplo com exportação de arquivo -- pasta "veerificador-de-idade.js".
// * EXEMPLO EXPORTAR COMO DAFAULT.
// const verificaIdade = require('./verificador-de-idade');

// const args = process.argv;
// const idade = args[2];
// [node, script, 50]

// console.log(verificaIdade(idade));
// ========================================================================

// * Exemplo com exportação de arquivo -- pasta "veerificador-de-idade.js".
// * EXEMPLO EXPORTAR COMO OBJETO (NAME).
// * Vantagem: pode-se trabalhar com mais de uma função.

const { maiorDeIdade, imprimeIdade } = require('./verificador-de-idade');
// OR
// const verificaIdade = require('./verificador-de-idade').maiorDeIdade;

const args = process.argv;
const idade = args[2];
// [node, script, 50]

imprimeIdade(idade);
console.log(maiorDeIdade(idade));
// OR
// console.log(verificaIdade(idade));
// ========================================================================
