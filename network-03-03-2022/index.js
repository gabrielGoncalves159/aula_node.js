// EXEMPLO 01 =========================================================
// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res) => {
//     const body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     });

//     req.on('end', () => {
//         const bodyAsStr = (
//             Buffer
//                 .concat(buffers)
//                 .toString()
//         );
//     });

// });

// server.listen(8080);

// =====================================================================

// EXEMPLO COM PROMISE =================================================
// const http = require('http');
// const server = http.createServer();
    
// function getBody(req) {
//     return new Promise((resolve, reject) => {
//          const body = [];
//          req.on('data', chunk => {
//              body.push(chunk);
//           });
//          req.on('error', (err) => {
//              reject(err);
//           });
//           req.on('end', () => {
//              const bodyAsStr = (
//                  Buffer
//                       .concat(buffers)
//                       .toString()
//             );
//              resolve(bodyAsStr);
//           });
        
//       });
//     }

// getBody(req)
//     .then(body => {
//         //body já está disponivel
//     })
//     .catch(err => {
//         // tratar o erro
//     });

// const body = await gerBody(req);
// =====================================================================