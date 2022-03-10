const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/GETjson', (req, res) => {
    res.send('Ultima Aula!, mensagem GET')
  });

app.post('/POSTjson', (req, res) => {
  const body = req.body;

  res.json({
    received_at: new Date().toISOString(),
    "Mensagem POST": body.message,
  });
});

app.listen(8080);