const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const api = express.Router();
const { obtenerProductos } = require('../db/models.js')

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

api.route('/productos')
  .get(obtenerProductos)

/*api.route('/presupuesto')
  .get(hacerPDFPresupuesto, mandarPDFPresupuesto)*/

/*  api.post('/contactanos')
    .post(mandarCorreoDeContacto)*/

app.use('/api', api);

const port = 1337;

app.listen(port);

console.log('Listening on port ', port);

module.exports = app;