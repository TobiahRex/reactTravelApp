const express = require('express');
const router = express.Router();
const request = require('request');
const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

router.get('/activities/:location', (req, res) => {
  yelp.search({ term: 'activities', location: req.params.location}, res.handle)
});

router.get('/breakfast/:location', (req, res) => {
  yelp.search({ term: 'breakfast', location: req.params.location}, res.handle)
});

router.get('/lunch/:location', (req, res) => {
  yelp.search({ term: 'lunch', location: req.params.location}, res.handle)
});

router.get('/dinner/:location', (req, res) => {
  yelp.search({ term: 'dinner', location: req.params.location}, res.handle)
});

module.exports = router;
