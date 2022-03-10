const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');
const server = http.createServer();

async function readTxtFiles() {

    try{
        const folderPath = path.join(__dirname, 'file.txt');
        const files = await fsPromise.readdir(folderPath);
        const readFile = files.map(file => {
            const filePath = path.join(__dirname, 'txt-files', file);
            return fsPromise.readFile(filePath, 'utf-8');
        });
        return Promise.all(readFile);
    } catch (err) {
        throw new Error('Erro no Arquivo', err);
    }
}

server.on('request', async (req, res) => {
    const { method, url} = req;

    const allFile = await readTxtFiles();

    if (method === 'GET' && url === '/testeHtml') {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(`
            <body>
                <h1>Lista de teste</h1>
                <ul>
                    <li>${allFile[0]}</li>
                    <li>${allFile[1]}</li>
                    <li>${allFile[2]}</li>
                </ul>
            </body>
        `);
    } else if (method === 'PUT' && url === '/testeJson') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            listaDeTeste : allFile,
        }));
    }
});

server.listen(8080, () => {

    console.log('este link em http://localhost:8080');
});