import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import dateFns from 'date-fns';

import Team from './Team';
import * as Actions from '../actions';
import * as helpers from '../helpers';

const Replay = ({ replay }) => {
  const teams = helpers.getValidTeams(replay.data.teams);

  return (
    <div className="replay">
      <div>

        <div className="replay__item-teams">
          {teams.map((team, idx) => {
            return <Team showVS={idx + 1 === teams.length} team={team} key={idx} />
          })}
        </div>
        <div className="replay__item-description">
          {replay.description}
        </div>
      </div>
      <div>
      </div>
      <div className="replay__item-details">
        <div>
          <a href={`https://s3.amazonaws.com/replays-bucket/${replay.bucketKey}`}>Download</a>
        </div>
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

 class ReplayList extends Component {
   state = {
     replays: [],
     page: 0,
     loading: true,
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
          page,
          loading: false,
        });
      });
   }

   render() {
     return (
       <div>
         {this.state.replays.map((replay, idx) => {
           return <Replay replay={replay} key={idx} />
         })}
         {
           this.state.loading ?
            <div className="loader">Loading...</div>
              :
            <div className="load-more-replays">
              <Button className="u-m-0-a" onClick={this.fetchMoreReplays}>Load More Replays</Button>
            </div>
         }

       </div>
     )
   }
 }

 export default ReplayList;