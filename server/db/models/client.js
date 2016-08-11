const Mail = require('./sendGrid.js');
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  who: {
    male: { type: Number },
    female: { type: Number },
    kids: { type: Number },
  },
  when: {
    start: { type: String },
    end: { type: String },
  },
  where: {
    city: { type: String },
    state: { type: String },
  },
  what: {
    activities: [],
    restaurants: [],
  },
  email: { type: String },
})

clientSchema.statics.deleteClient = (id, cb) => {
  if (!id) return cb({ Error: 'Missing required Id to Delete Client.' });

  return Client.findByIdAndRemove(id, (err1) => {
    if (err1) return cb({ Error: 'Could not delete Client. Check id.' });
    return Client.find({}, (err2, dbData) => {
      if (err2) return cb({ Error: 'Could not retrieve DB Clients.' });
      return cb(null, dbData);
    });
  });
}

clientSchema.statics.updateClient = (id, body, cb) => {
  if (!id) return cb({ Error: 'Missing required Id to Delete Client.' });

  return Client.findByIdAndUpdate(id, { $set: body }, (err1, newClient) => {
    if (err1) return cb({ Error: 'Could not delete Client. Check id.' });
    return Client.find({}, (err2, dbData) => {
      if (err2) return cb({ Error: 'Could not retrieve DB Clients.' });
      return cb(null, dbData);
    });
  });
}

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

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
