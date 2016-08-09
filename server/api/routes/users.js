const express = require('express');
const router = new express.Router();
const User = require('../../db/models/user.js');

route.route('/')
.get((req, res) => User.getUser(, res.handle))
.post((req, res) => User.getUser(req.body, res.handle))
.put((req, res) => User.updateUserInfo(req.body, res.handle))
.delete((req, res) => User.resetUser(, res.handle));

route.post('/email', (req, res) => User.sendEmail(req.body, res.handle));

module.exports = router;
