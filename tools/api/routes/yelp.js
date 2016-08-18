const express = require('express');

const router = new express.Router();

const Client = require('../../models/client');

router.post('/itinerary/:id', (req, res) => {
  Client.itinerary(req.params.id, req.body, res.handle);
});

module.exports = router;
