import React from 'react';

const Tournament = () => (
  <div className="about">
    <div className="about-item">
      <div className="about-item__header iframe-header">
        Upcoming Tournament
        <br />
        <a href="http://challonge.com/tournaments/signup/zH7piX66bG" className="link-brand">
          Register
        </a>
      </div>
      <div className="about-item__content">
       <iframe
        title="tournament-1"
        src="http://challonge.com/sa42jwk9/module"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="auto"
        allowTransparency="true">
      </iframe>
      </div>
    </div>
  </div>
)

export default Tournament;

