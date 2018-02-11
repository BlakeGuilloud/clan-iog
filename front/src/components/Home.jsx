import React from 'react';

const Home = () => (
  <div className="about">
    <div className="about-item">
      <div className="about-item__content">
        <img className="logo-splash" src="/images/logo-splash.png" alt="" />
      </div>
      <hr/>
    </div>
    <div className="about-item">
      <div className="about-item__header">Featured Cast</div>
      <br />
      <div className="about-item__content">
        <iframe title="iog-cast" src="https://www.youtube.com/embed/DWCwzri6Bks?ecver=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;