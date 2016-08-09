const express = require('express');
const Mod = require('../../db/mod');
const router = express.Router();

router.route('/')
.get((req, res) => { console.log('yo'); Mod.find({}, res.handle)})
.post((req, res) => Mod.create(req.body, res.handle))

router.route('/:id')
.delete((req, res) => Mod.removeOne(req.params.id, res.handle))
.put((req, res) => Mod.updateMod(req.params.id, req.body, res.handle));

module.exports = router
