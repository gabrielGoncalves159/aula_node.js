const http = require('http');
const server = http.createServer();

server.on('request', async (req, res) => {
    const { method, url } = req;

    if(method === 'POST' && url === '/json') {

        const body = await enviarValor(req);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        const objetoTxtRecebido = { texto: body };
        res.end(JSON.stringify(objetoTxtRecebido));

    }
});

function enviarValor(req) {
    return new Promise((resolve, reject) => {

         const body = [];
         req.on('data', chunk => {
             body.push(chunk);
          });
         req.on('error', (err) => {
             reject(`Erro ao processar o body, ${err}`);
          });
          req.on('end', () => {
             const bodyAsStr = (
                 Buffer
                      .concat(buffers)
                      .toString()
            );
             resolve(bodyAsStr);
          });
      });

    }

server.listen('caminho: http://localhost:8080');