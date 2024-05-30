const express = require('express');
const router = express.Router();
const Proyecto = require('./proyecto');

router.get('/proyectos', async (req, res) => {
  const proyectos = await Proyecto.find();
  res.json(proyectos);
});

router.post('/proyecto', async (req, res) => {
  const proyecto = new Proyecto(req.body);
  await proyecto.save();
  res.json(proyecto);
});

router.delete('/proyecto/:id', async (req, res) => {
  await Proyecto.findByIdAndDelete(req.params.id);
  res.json({ message: 'Proyecto eliminado correctamente' });
});

router.put('/proyecto/:id', async (req, res) => {
  const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(proyecto);
});

module.exports = router;