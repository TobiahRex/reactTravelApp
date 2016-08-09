let user = {
  who: {},
  when: {},
  where: {},
  what: {},
}

const User = {
  getUser(){
    return user;
  },
  updateUser(newInfo, cb){
    if (!newInfo.type) return cb({ Error: 'Did not provide update type for user.' });
    let user = this.getUser();

    switch(newInfo.type) {
      case 'WHO_UPDATE': user.who = newInfo.who; break;
      case 'WHEN_UPDATE': user.when = newInfo.when; break;
      case 'WHERE_UPDATE': user.where = newInfo.where; break;
      case 'WHAT_UPDATE': user.what = newInfo.what; break;
      default:
    };

    return cb(null, user);
  },
  resetUser(){
    user = {
      who: {},
      when: {},
      where: {},
      what: {},
    }
    return cb(null, `User Obj reset: ${user}`);
  }
}

module.exports = User;
