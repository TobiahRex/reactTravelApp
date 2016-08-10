const express = require('express');
const router = new express.Router();
const Client = require('../../db/models/client.js');

router.route('/')
.get((req, res) => Client.(res.handle))
.put((req, res) => Client.updateUserInfo(req.body, res.handle))
.delete((req, res) => Client.resetUser(res.handle));

router.post('/email', (req, res) => Client.sendEmail(req.body, res.handle));

module.exports = router;
