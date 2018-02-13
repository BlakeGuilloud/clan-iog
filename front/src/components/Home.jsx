import React, { Fragment } from 'react';

const Home = () => (
  <Fragment>
    <div className="about">
      <div className="about-item">
        <div className="about-item__content">
          <img src="/images/logo-splash.png" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="about-item">
        <div className="about-item__content indent alt__font">
          <p>
          Clan iOg offers an array of services to its members including ping reporting, spam protection, voteKick service, map hosting for in-house action and training, tournaments with cash prizes, user leave messages to keep members informed of games, clan replay repository, clan game chatting on discord, and clan youtube for replays.  Being a member of Clan iOg means being a part of the leading solo ladder clan in US East.  We are a friendly group who  don't take ourselves too seriously and enjoys a relaxed atmosphere in the presence of  talent.  Our members hold positions in the top 10 players in US East for solo and have beaten the first place players.  Come an visit us on battle.net and join the fun!
          </p>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Featured Cast</div>
        <br />
        <div className="about-item__content">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="iog-cast"
              src="https://www.youtube.com/embed/DWCwzri6Bks?ecver=1"
              allowFullScreen
              allow="autoplay; encrypted-media"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;