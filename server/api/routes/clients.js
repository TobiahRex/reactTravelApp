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
.put((req, res) => Client.updateClient(req.params.id, req.body, res.handle))
.delete((req, res) => Client.deleteClient(req.params.id, req.body, res.handle));

router.post('/email/:id', (req, res) => Client.sendEmail(req.params.id, req.body, res.handle));

module.exports = router;
