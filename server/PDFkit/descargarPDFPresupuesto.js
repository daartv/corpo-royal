const fs = require('fs');
const path = require('path');

exports.descargarPDFPresupuesto = (req, res) => {
  console.log('funcion invocada');
  res.download(__dirname + '/presupuesto.pdf', 'presupuesto.pdf', () => {
    fs.unlink(__dirname + '/presupuesto.pdf', (error) => {
      if (error) {
        console.log('there was an error deleting', error);
      } else {
        console.log('Succesfully deleted');
      };
    });
  });
}