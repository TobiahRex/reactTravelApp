const express = require('express');
const router = new express.Router();
const Client = require('../../db/models/client.js');

router.route('/')
.get((req, res) => Client.find({}, res.handle))
.delete((req, res) => Client.remove({}, res.handle));

router.route('/:id')
.get((req, res) => Client.findById(req.params.id, res.handle))
.put((req, res) => Client.findByIdAndUpdate(req.params.id, req.body, 'new', res.handle))
.delete((req, res) => Client.findByIdAndRemove(req.params.id, req.body));

router.post('/email', (req, res) => Client.sendEmail(req.body, res.handle));

module.exports = router;
