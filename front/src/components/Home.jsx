import React from 'react';

const Home = () => (
  <div className="about">
    <div className="about-item logo-container">
      <div className="about-item__content">
        <img src="/images/logo.png" alt=""/>
      </div>
    </div>
    <hr/>
    <div className="about-item">
      <div className="about-item__header">Featured Cast</div>
      <br />
      <div className="about-item__content">
        <iframe title="iog-cast" src="https://www.youtube.com/embed/cS4c7CGYFzw?ecver=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
  </div>
)

export default Home;