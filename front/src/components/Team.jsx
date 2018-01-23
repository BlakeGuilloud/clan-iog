import React from 'react';

const Player = ({ player }) => {
  console.log('player', player.apm.toFixed(0));
  return (
    <div>
      <div className="player">
        <img className="replay__img" src={`./images/${player.race}.png`} alt=""/>
        <div>
          &nbsp;{player.name}
        </div>
      </div>
      <span className="apm">{player.apm.toFixed(0)} apm</span>
    </div>
  )
}

const Team = ({ team, showVS }) => {
  return (
    <div>
      <h4 className="team">
        {showVS && <div className="player">vs.</div>}
        {Object.keys(team).map((player, idx) => <Player player={team[player]} key={idx} />)}
      </h4>
    </div>
  )
}

export default Team;