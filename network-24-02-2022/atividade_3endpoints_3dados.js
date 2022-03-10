const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');
const server = http.createServer();

server.on('request', (req, res) => {
    const {method, url} = req;

    if (method === 'GET' && url === '/testeJson') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            aluno: 'Gabriel',
            curso: 'node.js',
            teste: 'json',
        }))
    } else if (method === 'PUT' && url === '/testeHTML') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <h1>teste HTML</h1>
        `)
    } else if (method === 'PATCH' && url === '/testeXML') {
        res.statusCode = 200;
        res.setHeader('Contest-Type', 'txt/xml');
        res.end(`
            <atividade>
            <aluno>Gabriel</aluno>
            <curso>Node.js</curso>
            <teste>XML</teste>
            </atividade> 
        `);
    }
});

server.listen(8080, () => {

    console.log('este link em http://localhost:8080');
});


