import React from 'react';

const Youtube = () => (
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
);

export default Youtube;