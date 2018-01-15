const User = require('../models/users');

const syncDB = (bool=false) => {
  User.sync({ force: bool })
    .then(() => {
      console.log('User table synced');
    })
    .catch(err => {
      console.log(`Error syncing User table. Error: ${err}`);
    });
};

const addToDb = (user) => {
  User.findOrCreate({
    where: { username: user['display_name'] },
    defaults: {
      bio: user.bio,
      email: user.email,
      logo: user.logo,
      type: user.type,
      partnered: user.partnered,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken
    }
  })
    .spread((user, created) => {
      if (created) {
        console.log(`New user, ${user.username}, has been added`);
      } else {
        console.log(`Returning user, ${user.username}`);
      }
    })
    .catch(err => {
      console.log(`Error finding/creating user. Error: ${err}`);
    });
};

module.exports = { syncDB, addToDb };
