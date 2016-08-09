const express = require('express');
const router = new express.Router();
const User = require('../../db/models/user.js');

route.route('/new')
.post((req, res) => User.createNew(req.body, res.handle));
