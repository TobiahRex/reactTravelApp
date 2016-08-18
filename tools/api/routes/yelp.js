const express = require('express');
const router = express.Router();
const Client = require('../../db/models/client');

router.post('/itinerary/:id', (req, res) =>{
  console.log('req.body: ', req.body);
   Client.itinerary(req.params.id, req.body, res.handle)
 });

module.exports = router;
