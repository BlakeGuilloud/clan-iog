import React, { Component } from 'react';

class Shaman extends Component {
  render() {
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
        joinDate: '1/21/2017',
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

    return (
      <div className="shaman">
        <div className="shaman__title">iOg Leadership</div>
        <div className="shaman__list">
          <div className="shaman__item">
            <img className="shaman__item-image" src="/images/blizz/Chieftain.png" alt=""/>
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
    );
  }
}

export default Shaman;
