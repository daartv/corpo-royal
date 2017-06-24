const pdf = require('pdfkit');
const fs = require('fs');

exports.hacerPDFPresupuesto = (req, res) => {

  let myDoc = new pdf;
  myDoc.pipe(res);
  myDoc.font('Times-Roman')
       .fontSize(12)
       .text(`${req.body.nombre} ${req.body.telefono} ${req.body.email} ${req.body.carrito} ${req.body.subTotal} ${req.body.total} ${req.body.IVA}`);
  myDoc.end();
  res.setHeader('access-control-allow-origin', '*');
  res.status(200);
}

