import React, { Component } from 'react';

class Player extends Component {
  state = {
    renderBuildings: false,
    renderUnits: false,
  };

  handleToggle = (name) => {
    this.setState({ [name]: !this.state[name] });
  }

  render() {
    const renderPlayerItem = (id, idx, dict) => {
      if (id === 'order') {
        return null;
      }

      return (
        <div key={idx}>
          {id} - count: {dict[id]}
        </div>
      )
    };

    const { player } = this.props;

    return (
      <div>
        {player.name} - {player.race}
        <div onClick={() => this.handleToggle('renderBuildings')}>
          Buildings: {this.state.renderBuildings && Object.keys(player.buildings).map((id, index) => renderPlayerItem(id, index, player.buildings))}
        </div>
        <div onClick={() => this.handleToggle('renderUnits')}>
          Units: {this.state.renderUnits && Object.keys(player.units).map((id, index) => renderPlayerItem(id, index, player.units))}
        </div>
      </div>
    )
  }
}

export default Player;