const fs = require('fs');
const path = require('path');

exports.descargarPDFPresupuesto = (req, res) => {
  console.log('funcion invocada');
  res.download(__dirname + '/presupuesto.pdf', 'presupuesto.pdf');
}