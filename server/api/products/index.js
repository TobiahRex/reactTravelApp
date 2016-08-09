const express = require('express');
const router = express.Router();
const mods = require('./mods');

router.use('/mods', mods);

module.exports = router
