const Mail = require('./sendGrid.js');

let user = {
  who: {},
  when: {},
  where: {},
  what: {},
}

const User = {
  getUser(cb){
    return cb(null, user);
  },
  updateUserInfo(newInfo, cb){
    console.log('newInfo: ', newInfo);
    if (!newInfo.type) return cb({ Error: 'Did not provide update type for user.' });

    switch(newInfo.type) {
      case 'WHO_UPDATE': user.who = newInfo.who; break;
      case 'WHEN_UPDATE': user.when = newInfo.when; break;
      case 'WHERE_UPDATE': user.where = newInfo.where; break;
      case 'WHAT_UPDATE': user.what = newInfo.what; break;
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
    }
    return cb(null, `User Object reset to: ${user}`);
  },
  sendEmail(userEmail, cb){
    if (!userEmail) return cb({ Error: 'Did not provide user email.' });

    let savedUser = Object.assign({}, user, userEmail);
    console.log('savedUser for eMail: ', savedUser);
    Mail.itinerary(savedUser, response => {
      if (response.statusCode !== 202) return cb({ Error: `Sendgrid response = ${response.statusCode}`});
      this.resetUser(cb);
    });
  }
}

module.exports = User;
