const express = require('express')
const yelp = require('./routes/yelp');
const clients = require('./routes/clients');

const router = express.Router();
router.use('/yelp', yelp);
router.use('/clients', clients);

module.exports = router
