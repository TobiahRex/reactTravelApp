const express = require('express')
const yelp = require('./routes/yelp');
const users = require('./routes/users');

const router = express.Router();
router.use('/yelp', yelp);
router.use('/users', users);

module.exports = router
