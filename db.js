const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Conexión exitosa con la base de datos');
});

module.exports = db;