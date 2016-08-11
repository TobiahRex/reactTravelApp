const Mail = require('./sendGrid.js');
const mongoose = require('mongoose');
const async = require('async');
const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

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
  itinerary: [],
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

clientSchema.statics.itinerary = (id, body, cb) => {
  if (!id) return cb({ Error: `Cannot find client by this ${id} `});

  let yelpSearch = [{term: 'breakfast', location: body.location}, {term: 'lunch', location: body.location}, {term: 'dinner', location: body.location}];

  async.map(yelpSearch, yelpSearching, (err, data) => {
    if(err) {
      console.log('err:', err);
    }
    let breakfast = data[0];
    console.log('breakfast:', breakfast);
    let lunch = data[1];
    let dinner = data[2];
    Client.findById(id, (err, dbClient) => {
      let length = dbClient.when.days;
      if(err || !length) return cb(err);

      for(let i = 1; i<length; i++) {

        let newObj = {
          day: i,
          breakfast: [breakfast[i-1], breakfast[i]],
          lunch: [lunch[i-1], lunch[i]],
          dinner: [dinner[i-1], dinner[i]]
        }

        dbClient.itinerary.push(newObj);
      }
      dbClient.save((err2, savedClient)=> {
        if(err2) return cb(err2);
        cb(null, savedClient);
      });
    })
  })
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

function yelpSearching(term, callback) {
  yelp.search(term, (err, data) => {
    callback(err, data.businesses)
  });
}


const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
