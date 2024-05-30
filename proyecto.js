const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  categoria: String,
  creador: String,
  anio: Number,
  duracion: Number,
  video_demo: String,
  software_utilizado: [String],
  etiquetas: [String]
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;