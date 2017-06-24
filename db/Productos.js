const MongoClient = require('mongodb').MongoClient;

exports.obtenerProductos = (req, res) => {
  MongoClient.connect("mongodb://localhost:27017/royalplastDB", (error, db) => {
    if (!error) {
      console.log('conectado a Mongo')
      let collection = db.collection('productos');
      collection.find().toArray(function(err, productos) {
        if (err) {
          console.log('error obteniendo los productos desde la base de datos')
          res.status(404)
          res.json('Not found')
        } else {
          res.setHeader('access-control-allow-origin', '*');
          res.status(200);
          res.json(productos);
        }
      });
    }
  });
}