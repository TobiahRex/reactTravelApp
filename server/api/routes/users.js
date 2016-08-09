const express = require('express');
const router = new express.Router();
const User = require('../../db/models/user.js');

router.route('/')
.get((req, res) => User.getUser(res.handle))
.put((req, res) => {console.log(req.body), User.updateUserInfo(req.body, res.handle)})
.delete((req, res) => User.resetUser(res.handle));

router.post('/email', (req, res) => User.sendEmail(req.body, res.handle));

module.exports = router;
