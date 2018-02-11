import React, { Fragment } from 'react';

const shaman = [
  {
    name: 'DBOL',
    race: 'Random',
    joinDate: '08/22/2016',
  },
  {
    name: 'Ragnarok',
    race: 'Random',
    joinDate: '09/06/2016',
  },
  {
    name: 'Sly_One',
    race: 'Night Elf',
    joinDate: '10/24/2017',
  },
  {
    name: 'FatRedBelly',
    race: 'Human',
    joinDate: '10/27/2017',
  },
  {
    name: 'BLinK',
    race: 'Night Elf',
    joinDate: '1/02/2018',
  },
];

const renderShaman = (item, idx) => (
  <div className="shaman__item" key={idx}>
    <img className="shaman__item-image" src="/images/blizz/Shaman.png" alt=""/>
    <div className="shaman__item-name">
      <a className="link-brand" target="_blank" href={`http://classic.battle.net/war3/ladder/w3xp-player-profile.aspx?Gateway=Azeroth&PlayerName=${item.name}`}>
        {item.name}
      </a>
      <div className="shaman__item-blurb">
        <span>Race:</span> {item.race}
      </div>
      <div className="shaman__item-blurb">
        <span>Join Date:</span> {item.joinDate}
      </div>
    </div>
  </div>
);

const About = () => (
  <Fragment>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">iOg Leadership</div>
        <div className="shaman__item">
          <img className="shaman__item-image" src="/images/blizz/Chieftain.png" alt="" />
          <div className="shaman__item-name">
            <a className="link-brand" target="_blank" href={'http://classic.battle.net/war3/ladder/w3xp-player-profile.aspx?Gateway=Azeroth&PlayerName=Legal_Ease'}>Legal_Ease</a>
            <div className="shaman__item-blurb">
              <span>Race:</span> Orc
            </div>
            <div className="shaman__item-blurb">
              <span>Join Date:</span> 10/10/2016
            </div>
          </div>
        </div>
        {shaman.map(renderShaman)}
      </div>
    </div>

    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Clan History</div>
        <div className="about-item__content indent alt__font">
          <p>
            The Clan was originally created back in 2008. When The Frozen Throne was actually active and had a lot of people playing. About a year later JoeyMatrix stopped playing and the clan ultimately became a memory to the people in it. He still kept in contact with some people he met back then. Then one day in 2016 JoeyMatrix had the flu and he pulled out his old laptop from college and saw The Frozen Throne still downloaded. He decided to open it and log in. His account was obviously deleted and he lost his 750 win BloodMage. Shit happens. He decided to create the account named JoeyMatrix. He became friendly with some people and became Shaman of Clan Wolf.  That clan was then given to Joey. Eventually after meeting alot of new people and talking to the original owner of the clan who didn't want it back and he ended up making another clan. He named it Clan iOg (It's Only a Game). At first it was just a clan he had created on a random account just to have. Then eventually he felt he should have his own clan that he had started. So a bunch of people in the old clan had went over and became iOg. Then over a year later, still going strong, Clan iOg became the #1 Ranked clan for solo games in Bnet US East. During this time JoeyMatrix tapped LegaL_EasE to be shaman. JoeyMatrix then established an expansion clan - iOg2.  Sly_One became a shaman in iOg2.  However, this split caused some of the better members to migrate to iOg2.  Additionally Head-ShoT (a.k.a. Garrin) left his position as Shaman and started Clan FEAR and the Clan aG, who unseated clan iOg soon taking the #1 rank from us.  JoeyMatrix lost interest in standard ladder and began playing DoTa and Bnet Football, and ultimately left in favor of his console.
          </p>
          <p>
            Before he left he appointed LegaL_EasE as Regent Chief.  Though officially the chief of the Clan, Legal_ease holds the clan safe for JoeyMatrix should he decide to return.  However, with JoeyMatrix gone, the clan's oldest and evilest shaman, ARCHER became bitter by the appointment of LegaL_EasE as chieftain and he banned Legal when he was in a Bnet game.  From the depths of The Void, Legal_ease messaged ARCHER who refused to explain laughing "hahahaha."  Legal_Ease then took immediate and decisive action and removed ARCHER from the clan.   Gronkowski, chief of iOg2, made ARCHER shaman and then Chief there.  ARCHER destroyed the clan, disbanding it.  ARCHER is now banned from iOg and has not been seen in many months, though his ghost haunted the channel for a time (seriously couldn't kick the profile as it was "offline" and it only appeared to some users).  With ARCHER out of the picture, and the land rid of evil, LegaL_EasE was able to recruit magicmushroom who had been shaman earlier with JoeyMatrix.  With the troubles of the past behind, Legal_Ease brought in Sly_One too and together with Dbol and Ragnarok, the shaman team helped lead Clan iOg back to it's rightful place as the #1 ranked solo ladder clan in Bnet US East overtaking clan aG.  More recently BLink joined the ranks of the iOg shaman and developed this website in his free time between games.
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default About;