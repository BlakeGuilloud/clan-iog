import React from 'react';

const Player = ({ player }) => (
  <div className="player">
    <img className="replay__img" src={`./images/blizz/${player.race}.png`} alt=""/>
    <span className="player__name">
      {player.name}
      <div className="apm">{player.apm.toFixed(0)} apm</div>
    </span>
  </div>
)

const Team = ({ team, showVS }) => (
  <h4 className="team">
    {showVS && <div className="player">vs.</div>}
    {Object.keys(team).map((player, idx) => <Player player={team[player]} key={idx} />)}
  </h4>
)

export default Team;