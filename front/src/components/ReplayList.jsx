import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import dateFns from 'date-fns';

import Team from './Team';
import * as Actions from '../actions';
import * as helpers from '../helpers';

class Replay extends Component {
  render() {
    const { replay } = this.props;

    const teams = helpers.getValidTeams(replay.data.teams);

    return (
      <div className="replay">
        <div className="replay__item">

          <div className="replay__item-teams">
            {teams.map((team, idx) => {
              return <Team showVS={idx + 1 === teams.length} team={team} key={idx} />
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
        </div>
        <div className="replay__item-details">
          <a className="link-brand" href={`https://s3.amazonaws.com/replays-bucket/${replay.bucketKey}`}>
            Download
          </a>
          <div>
            {helpers.formatMap(replay.data.map)}
          </div>
          <div>
            {dateFns.format(replay.createdAt, 'MM/DD/YYYY')}
          </div>
        </div>
      </div>
    )
  }
}

 class ReplayList extends Component {
   state = {
     loading: true,
     page: 0,
     replays: [],
     showLoadMoreButton: true,
   };

   componentDidMount() {
    Actions.fetchReplays({ page: this.state.page })
      .then((replays) => {
        this.setState({ replays, loading: false });
      });
   }

   fetchMoreReplays = () => {
     this.setState({
       loading: true,
     });

     const page = this.state.page + 1;

     Actions.fetchReplays({ page })
      .then((replays) => {
        this.setState({
          replays: this.state.replays.concat(replays),
          page: replays.length ? page : this.state.page,
          loading: false,
          showLoadMoreButton: !!replays.length,
        });
      });
   }

   render() {
     const renderLoadMoreButton = () => (
       this.state.showLoadMoreButton &&
        <div className="load-more-replays">
          <Button className="u-m-0-a" onClick={this.fetchMoreReplays}>Load More Replays</Button>
        </div>
     )
     return (
       <div>
         {this.state.replays.map((replay, idx) => {
           return <Replay replay={replay} key={idx} />
         })}
         {
           this.state.loading ?
            <div className="loader">Loading...</div>
              :
            renderLoadMoreButton()
         }

       </div>
     )
   }
 }

 export default ReplayList;