import React, { Fragment } from 'react';

const Media = () => (
  <Fragment>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Join us on Discord</div>
        <div className="about-item__content">
          <iframe
            title="discord"
            src="https://discordapp.com/widget?id=388970757482610699&theme=dark"
            className="iframe"
            allowtransparency="true"
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Clan iOg Youtube Playlist</div>
        <div className="about-item__content">
          <iframe
            title="youtube"
            className="iframe"
            src="https://www.youtube.com/embed/videoseries?list=PLyDoV8vNT3vknFG-mv8AcLfNQIS9cqhDN"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Media;

