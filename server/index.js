const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const api = express.Router();
const { obtenerProductos } = require('../db/Productos.js');
const { hacerPDFPresupuesto } = require('./PDFkit/hacerPDFPresupuesto.js');
const { descargarPDFPresupuesto } = require('./PDFkit/descargarPDFPresupuesto.js')

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

api.route('/productos')
  .get(obtenerProductos)

api.route('/presupuesto')
  .post(hacerPDFPresupuesto)

api.route('/descarga')
  .get(descargarPDFPresupuesto)

/*  api.route('/contactanos')
    .post(mandarCorreoDeContacto)*/

app.use('/api', api);

const port = 1337;

app.listen(port);

console.log('Listening on port ', port);

module.exports = app;