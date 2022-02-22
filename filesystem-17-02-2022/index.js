const fs = require('fs');
const path = require('path');

// PRIMEIRO EXEMPLO ===========================================
// __durname, __filename
//Assincrono
const filePath = path.join(__dirname, 'file.txt');
// fs.readFile(filePath, 'utf-8', (err, data) => {
// //    console.log('Os dados do arquivo são', data);
//     console.log('Retornou dados do readFile');
// });
// =============================================================

// SEGUNDO EXEMPLO =============================================
//SINCRONO
// const data = fs.readFileSync(filePath, 'utf-8');
// console.log('Resposta do readFileSync', data);
// console.log('Agora sim é o final');
// =============================================================

// TERCEIRO EXEMPLO ============================================
// EXEMPLO DE PROMISE
// function cumprimenta(nome) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Olá, ' + nome);
//         }, 2000);
//     });
// }

// cumprimenta('erich').then((res) => { console.log(res); });

// EXEMPLO DE PROMISES ========================================
// fs.promises
// 	.readFile(filePath, 'utf-8')
// 	.then((res) => {
// 		console.log('Isso tá acontecendo dentro da Promise\n', res);
// 	});
// =============================================================

// EXEMPLO STAT ================================================

fs.readdir(__dirname, (err, files) => {
	files.forEach(f => {
		const fPath = path.join(__dirname, f);
		fs.stat(fPath, (_, fileStats) => {
			console.log(`File: ${f}\t isFile: ${fileStats.isFile()}\t 
			isDir: ${fileStats.isDirectory()}\t size: ${fileStats.size} bytes`)
		})
	})
})