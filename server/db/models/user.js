const Mail = require('./sendGrid.js');

let user = {
  who: {
    male: 0,
    female: 0,
    kids: 0,
  },
  when: {
    start: '',
    end: '',
  },
  where: {
    city: '',
    state: '',
  },
  what: {
    activities: [],
    restaurants: []
  },
  email: ''
}

const User = {
  getUser(cb){
    return cb(null, user);
  },
  updateUserInfo(newInfo, cb){

    console.log('newInfo: ', newInfo);

    if (!newInfo.type) return cb({ Error: 'Did not provide update type for user.' });

    switch(newInfo.type) {
      case 'WHO':
        user.who = newInfo.who;
        console.log('user.who: ', user.who);
        break;

      case 'WHEN_UPDATE':
        user.when = newInfo.when;
        break;

      case 'WHERE_UPDATE':
        user.where = newInfo.where;
        break;

      case 'WHAT_UPDATE':
        user.what = newInfo.what;
        break;

      default:
    };

    return cb(null, user);
  },
  resetUser(cb){
    user = {
      who: {},
      when: {},
      where: {},
      what: {},
      email: '',
    }
    return cb(null, `User Object reset to: ${user}`);
  },
  sendEmail(userEmail, cb){
    if (!userEmail) return cb({ Error: 'Did not provide user email.' });

    let clientInfo = Object.assign({}, user, userEmail);
    console.log('clientInfo for eMail: ', clientInfo);
    Mail.itinerary(clientInfo, response => {
      console.log('response: ', response);
      this.resetUser(cb);
    });
  }
}

module.exports = User;
