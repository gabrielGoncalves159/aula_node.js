// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//   res.write('Ola mundo!');
//   res.end();
// });

// server.listen(8080, () => {
//     console.log(`escutando em http://localhost:8080`);
// });

// JSON ========================================================
// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     const { method, url } = req;
  
//     if (method === 'GET' && url === '/') {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify({
//         escola: 'lets code',
//         ano: 2022,
//       }));
//     }
//   });

// server.listen(8080, () => {
//     console.log(`escutando em http://localhost:8080`);
// });

// =============================================================

// HTML ========================================================
// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     const { method, url } = req;
  
//     if (method === 'GET' && url === '/') {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       res.end(
//          '<h1>Olá Mundo</h1>'
//       );
//     }
//   });

// server.listen(8080, () => {
//     console.log(`escutando em http://localhost:8080`);
// });

// =============================================================

// EXERCICIO 1 RETORNA JSON OUTRA RETORNA HTML =================
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const { method, url } = req;

    if ( method === 'GET' && url === '/json' ) {
        res.statusCode = 200;
        res.setHeader('Cotent-Type', 'application/json');
        res.end(JSON.stringify({
            teste: 'teste ok json',
            author: 'Gabriel',
            ano: 2022,
        }));
    }

    if ( method === 'PUT' && url === '/html' ) {
        res.statusCode = 200;
        res.setHeader('Cotent-Type', 'text/html');
        res.end(`
        <div>
        <h1>teste HTML</h1> 
        <p>Taca-lhe pau nesse carrinho, Marco velho!!</p> 
        </div>
     `)
    }
});

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080/json`);
});

// =============================================================