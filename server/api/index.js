const express = require('express')
const yelp = require('./routes/yelp');

const router = express.Router();
router.use('/yelp', yelp);

module.exports = router
