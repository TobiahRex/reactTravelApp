const Mail = require('./sendGrid.js');
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  who: {
    male: {
      type: Number,
      default: 0,
    },
    female: {
      type: Number,
      default: 0,
    },
    kids: {
      type: Number,
      default: 0,
    },
  },
  when: {
    start: {
      type: String,
      default: '',
    },
    end: {
      type: String,
      default: '',
    },
    days: Number
  },
  where: {
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
  },
  activities: [],
  breakfast: [],
  lunch: [],
  dinner: [],
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
  let mongoID = mongoose.Types.ObjectId(id);
  return Client.findByIdAndUpdate(mongoID, body, 'new', (err1, newClient) => {
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
