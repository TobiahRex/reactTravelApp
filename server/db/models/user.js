const Mail = require('./sendGrid.js');
const mongoose = require('mongoose');

const clientSchema = mongoose.schema({
  who: {
    male: { type: Number },
    female: { type: Number },
    kids: { type: Number }
  }
  when: {
    start: { type: String },
    end: { type: String }
  },
  where: {
    city: { type: String },
    state: { type: String },
  }
  what: {
    activities: [],
    restaurants: []
  },
  email: { type: String }
})

clientSchema.statics.sendEmail = (clientEmail, clientId, cb) => {
  if (!clientEmail || !clientId) return cb({ Error: 'Did not provide necessary client information to send email.' });

  Client.findById(clientId, (err, dbClient) => {
    if (err) return cb(err);
    dbClient.email = clientEmail;
    dbClient.save((err2, savedClient) => {
      if (err2) return cb(err2);
      Mail.itinerary(savedClient, response => {
        cb(null, savedClient);
      });
    });
  });
}

let Client = new mongoose.model('Client', clientSchema);
module.exports = Client;
