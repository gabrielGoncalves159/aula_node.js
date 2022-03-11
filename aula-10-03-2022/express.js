const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const beerRouter = require('/beer');

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.melhorCerveja = 'Heineken';
  next();
});

app.use('/beer', beerRouter);

app.listen(8080);







