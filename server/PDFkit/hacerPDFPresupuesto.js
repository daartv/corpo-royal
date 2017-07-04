const pdf = require('pdfkit');
const fs = require('fs');
const path = require('path');

exports.hacerPDFPresupuesto = (req, res) => {
  console.log('este es el carrito', req.body.carrito);
  let { 
    carrito,
    subTotal,
    total,
    IVA
  } = req.body;
  let doc = new pdf;
  doc.pipe(fs.createWriteStream(`PDFkit/presupuesto.pdf`));
  doc.font('Times-Roman')
        .fontSize(24)
        .text('Royal Plast C.A.', {align: 'center'})

        .fontSize(20)
        .text('Presupuesto', {align: 'center'})
           
        .text('______________________________________________', {stroke: true})
      
      .moveDown()
      .fontSize(16)
      .text('Cantidad', {align: 'left', underline: 'true'})

      .moveUp()
      .text('Producto', {align: 'center', underline: 'true'})

      .moveUp()
      .text('Precio', {align: 'right', underline: 'true'})

      for (let producto of carrito) {
        doc.moveDown()
          .fontSize(16)
          .text(`${producto.cantidad}`, {align: 'left'})
          .moveUp()
          .text(`${producto.nombre}`, {align: 'center'})
          .moveUp()
          .text(`${producto.precio}`, {align: 'right'})
      }

      doc.text('__________________________________________________________')
        .text(`Subtotal: ${subTotal} BsF`, {align: 'right'})
        .moveDown()
        .text(`IVA: ${IVA} BsF`, {align: 'right'})
        .moveDown()
        .text(`Total: ${total} BsF`, {align: 'right'})

        .moveUp()
        .text('__________________________________________________________')
        .fontSize(12)
        .text('Royal Plast CA - RIF: J-30924274-1', {align: 'right'})
        .text('Carrera 1 esq. Calle D Galpón Nro. 2-30A Zona Industrial III.Comdibar', {align: 'right'})
        .text('Barquisimeto, Estado Lara', {align: 'right'})
        .text('+58 251 2690061', {align: 'right'})
        .text('+58 251 2692024', {align: 'right'})
        .text('royalplastventas@gmail.com', {align: 'right'})




  doc.end();

  res.setHeader('access-control-allow-origin', '*');
  res.status(200);
  res.end();
}

// .text(`${req.body.nombre} ${req.body.telefono} ${req.body.email} ${req.body.carrito} ${req.body.subTotal} ${req.body.total} ${req.body.IVA}`);