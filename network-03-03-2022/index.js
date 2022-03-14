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

const http = require('http');
const beerRouter = require('./routes/beer-router');
const { fetchPokemon } = require('./helpers');
const URL = require('url');

const server = http.createServer();

server.on('request', async (req, res) => {
  const { method, url } = req;
  const { query } = URL.parse(req.url, true);

  if (url.startsWith('/poke')) {
    const pokemonName = await fetchPokemon(query.id);
    res.end(pokemonName);

  } else if (url.startsWith('/beer')) {
    beerRouter(req, res);

  } else {
    res.statusCode = 404;
    res.end('resource not found');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});