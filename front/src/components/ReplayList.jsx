import React, { Component } from 'react';
import dateFns from 'date-fns';
import { Link } from 'react-router-dom';

import Team from './Team';
import * as Actions from '../actions';
import * as helpers from '../helpers';

class Replay extends Component {
  state = {
    showWinner: false,
  };

  handleShowWinnerClick = () => {
    this.setState({ showWinner: !this.state.showWinner });
  }

  render() {
    const { replay, updateDownloadCount } = this.props;

    const teams = helpers.getValidTeams(replay.data.teams);
    const { winner } = replay.data;

    const winningTeam = teams.reduce((acc, currVal) => {
      const returnVal = Object.keys(currVal)
        .filter(item => {
          return currVal[item].team === winner;
        })
        .map((item) => {
          return currVal[item].name;
        });

      if (returnVal.length) {
        return returnVal;
      }

      return acc;
    }, {});

    return (
      <div className="replay">
        <div className="replay__item">

          <div className="replay__item-teams">
            {teams.map((team, idx) => {
              return <Team showVS={idx + 1 === teams.length} team={team} key={idx} />;
            })}
          </div>
          {replay.data.length &&
            <div>
              Replay Length: {helpers.formatGameLength(replay.data.length)}
            </div>
          }
          <div className="replay__item-description">
            {replay.description}
          </div>
          <div className="link-brand" onClick={this.handleShowWinnerClick}>
            Show Winner
          </div>
          <div>
            {this.state.showWinner && `Winner: ${winningTeam.join(', ')}`}
          </div>
        </div>
        <div className="replay__item-details">
          <a onClick={() => updateDownloadCount(replay._id)} className="link-brand" href={`https://s3.amazonaws.com/replays-bucket/${replay.bucketKey}`}>
            Download ({replay.downloads || 0})
          </a>
          <div>
            {helpers.formatMap(replay.data.map)}
          </div>
          <div>
            {dateFns.format(replay.createdAt, 'MM/DD/YYYY')}
          </div>
        </div>
      </div>
    );
  }
}

class ReplayList extends Component {
   state = {
     loading: true,
     page: 0,
     replays: {},
     replayIds: [],
     showLoadMoreButton: true,
   };

   componentDidMount() {
     Actions.fetchReplays({ page: this.state.page })
       .then((replays) => {
         this.setState({
           replayIds: replays.result,
           replays: replays.entities.replays,
           loading: false,
         });
       });
   }

   fetchMoreReplays = () => {
     this.setState({
       loading: true,
     });

     const page = this.state.page + 1;

     Actions.fetchReplays({ page })
       .then((response) => {
         console.log(response);
         this.setState({
           replayIds: this.state.replayIds.concat(response.result),
           replays: { ...this.state.replays, ...response.entities.replays },
           page: response.result.length ? page : this.state.page,
           loading: false,
           showLoadMoreButton: !!response.result.length,
         });
       });
   }

   updateDownloadCount = (id) => {
     Actions.updateDownloadCount(id)
       .then((replay) => {
         const replays = { ...this.state.replays };

         replays[id] = replay;

         this.setState({ replays });
       });
   }

   render() {
     const renderLoadMoreButton = () => (
       this.state.showLoadMoreButton &&
        <div className="load-more-replays">
          <button className="u-m-0-a btn btn-outline-dark" onClick={this.fetchMoreReplays}>Load More Replays</button>
        </div>
     );

     return (
       <div>
         <div className="upload__button">
           <Link className="u-m-0-a btn btn-outline-dark" to="/upload">Upload Replay</Link>
         </div>
         {this.state.replayIds.map((replay, idx) => {
           return <Replay updateDownloadCount={this.updateDownloadCount} replay={this.state.replays[replay]} key={idx} />;
         })}
         {
           this.state.loading ?
             <div className="loader">Loading...</div>
             :
             renderLoadMoreButton()
         }

       </div>
     );
   }
}

export default ReplayList;