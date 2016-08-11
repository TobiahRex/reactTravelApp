const express = require('express');
const router = new express.Router();
const Client = require('../../db/models/client.js');
const mongoose = require('mongoose');

router.route('/')
.get((req, res) => Client.find({}, res.handle))
.delete((req, res) => Client.remove({}, res.handle))
.post((req, res) => Client.create(req.body, res.handle));

router.route('/:id')
.get((req, res) => Client.findById(req.params.id, res.handle))
.put((req, res) => {
  let mongoId =  mongoose.Types.ObjectId(req.params.id);
  Client.updateClient(mongoId, req.body, res.handle);
})
.delete((req, res) => Client.deleteClient(req.params.id, req.body, res.handle));

router.post('/email', (req, res) => Client.sendEmail(req.body, res.handle));

module.exports = router;
