const pdf = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.hacerPDFPresupuesto = (req, res) => {
  let myDoc = new pdf;
  myDoc.pipe(fs.createWriteStream(`PDFkit/presupuesto.pdf`));
  myDoc.font('Times-Roman')
       .fontSize(12)
       .text(`${req.body.nombre} ${req.body.telefono} ${req.body.email} ${req.body.carrito} ${req.body.subTotal} ${req.body.total} ${req.body.IVA}`);
  myDoc.end();

/*  let file = path.join(__dirname, `${req.body.nombre}-presupuesto.pdf`);
  res.download(file, function (err) {
      if (err) {
          console.log("Error");
          console.log(err);
      } else {
          console.log("Success");
      }
  });*/

  let stat = fs.statSync(`/Users/dario/Desktop/Projects/corpo-royal/server/PDFkit/presupuesto.pdf`);
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/pdf',
    'Content-disposition': `attachment;filename=[presupuesto].pdf`,
    'Content-Length': stat.size
  });
  res.send();
}

