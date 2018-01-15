import React from 'react';

const LandView = ({ authorized }) => (
  <div>
    <h1>TWITCH CARDS</h1>
    { authorized === false ? <p style={{ color: 'red' }}>Login Failed!</p> : <br /> }
    <a href="http://localhost:3000/auth/twitch" target="_blank">
      <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" alt="twitch login" />
    </a>
  </div>
);

export default LandView;
