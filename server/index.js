const express = require('express');
const path = require('path');
const axios = require('axios');
const session = require('express-session');
const passport = require('passport');
const passportOauth = require('passport-oauth');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Initialize env variables
dotenv.config({ path: path.resolve(__dirname, './.env') });

// Define constants
const OAuth2Strategy = passportOauth.OAuth2Strategy;
const PORT = process.env.PORT;
const SESSION_SECRET = 'twitchcards';
const CALLBACK_URL = 'http://localhost:3000/auth/twitch/callback';

// Initialize Express and middlewares
const app = express();
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan());
app.use(cors());

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  const options = {
    url: 'https://api.twitch.tv/kraken/user',
    method: 'GET',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Authorization': 'OAuth ' + accessToken,
    },
  };

  axios(options)
    .then(result => {
      result.statusCode === 200 && done(null, JSON.parse(result.data));
    })
    .catch(err => {
      done(JSON.parse(err));
    });
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use('twitch', 
  new OAuth2Strategy({
    authorizationURL: 'https://api.twitch.tv/kraken/oauth2/authorize',
    tokenURL: 'https://api.twitch.tv/kraken/oauth2/token',
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_SECRET,
    callbackURL: CALLBACK_URL,
    state: true
  },
  (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    // Store user profile in db

    done(null, profile);
  }
));

// Set route to start OAuth
app.get('/auth/twitch', passport.authenticate('twitch', { scope: 'user_read' }));

// Set route for OAuth redirect
app.get('/auth/twitch/callback', passport.authenticate('twitch', { successRedirect: '/', failureRedirect: '/' }));

app.get('/', (req, res) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    res.send({ result: req.session.passport.user });
  } else {
    res.status(400).send({ error: 'User is not authorized' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
