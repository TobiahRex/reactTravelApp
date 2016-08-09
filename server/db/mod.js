const mongoose = require('mongoose');

const modSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  model: { type: String, required: true },
  images: [{
    type: String,
  }],
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: { type: Number },
  description: { type: String },
  note: { type: String },
  category: { type: String },
  quantity: { type: Number },
  cartQty: { type: Number },
  options: {
    popularity: { type: Number },
    rating: { type: Number },
    dateAdded: { type: Date, default: Date.now },
    styles: [{ type: String }],
    colors: [{ type: String }],
    sizes: [{ type: String }],
  },
});

modSchema.statics.removeOne = (id, cb) => {
  if (!id) return cb({ Error: 'Missing required Id to Delete Mod.' });

  return Mod.findByIdAndRemove(id, (err1) => {
    if (err1) return cb({ Error: 'Could not delete Mod. Check id.' });
    return Mod.find({}, (err2, dbData) => {
      if (err2) return cb({ Error: 'Could not retrieve DB Mods.' });
      return cb(null, dbData);
    });
  });
}

modSchema.statics.updateMod = (id, body, cb) => {
  if (!id) return cb({ Error: 'Missing required Id to Delete Mod.' });

  return Mod.findByIdAndUpdate(id, body, 'new', (err1, newMod) => {
    if (err1) return cb({ Error: 'Could not delete Mod. Check id.' });
    return Mod.find({}, (err2, dbData) => {
      if (err2) return cb({ Error: 'Could not retrieve DB Mods.' });
      return cb(null, dbData);
    });
  });
}
const Mod = mongoose.model('Mod', modSchema);
module.exports = Mod;
