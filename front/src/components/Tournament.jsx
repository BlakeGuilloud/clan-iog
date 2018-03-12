import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Actions from '../actions';

class Tournament extends Component {
  state = {
    participantName: '',
    error: null,
    formInProgress: false,
    participants: [],
  };

  componentDidMount() {
    this.fetchTournamentParticipants();
  }

  fetchTournamentParticipants = () => {
    Actions.fetchTournamentParticipants('sa42jwk9')
      .then((participants) => {
        this.setState({
          participants,
        });
      });
  }

  handleRegistration = (tournamentId) => {
    this.setState({
      formInProgress: true,
    });

    Actions.registerForTournament(tournamentId, this.state.participantName)
      .then(this.fetchTournamentParticipants)
      .then(() => {
        this.setState({
          error: null,
          formInProgress: false,
          participantName: '',
        });
        $('#registrationModal').modal('hide'); // eslint-disable-line
      })
      .catch((error) => {
        this.setState({ error, formInProgress: false });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="about">
        <div className="about-item">
          <div className="about-item__header">
            The iOg Cup is OVER!
          </div>
          <p className="text-center">
            Congratulations to our winner: PSILoveYou !
          </p>
          <p className="text-center">
            For full tournament details, visit <a href="http://challonge.com/sa42jwk9" className="link-brand">Challonge</a>.
          </p>


          <div className="about-item__content u-a-f-s alt__font">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                id="challonge"
                title="tournament-1"
                src="https://challonge.com/sa42jwk9/module"
                allowtransparency="true"
                // width="100%"
                // height="500"
                scrolling="yes"
              >
              </iframe>
            </div>
            <hr/>
            <p>
              Welcome to the first iOg Cup! The tournament will host 16 players and consist of two stages: a Group Stage followed by a Knockout Stage. Players that register after the tournament has filled up will be slotted into the Waiting List.
            </p>
            <p>
              The Group Stage will randomly assign 4 groups of 4 players once the tournament has filled up. Each player will play each player in their group in a best of 1. The top 2 players from each group will move on to the Knockout Stage. Tie breakers are determined by the head-to-head matchup. A 3 way tie breaker has yet to be determined.
            </p>
            <p>
              The Knockout Stage is a single elimination bracket and consists of three rounds: Quarter - best of 3, Semi - best of 5, and Final - best of 7.
            </p>
            <p>
              During the Group Stage, if a map cannot be decided on between the two participants, a veto system will be put in place. Each player will alternate vetoing maps until one is left. There will be no vetoes during the Knockout Stage, and the loser of the previous game will choose a map that has yet to be played in their series.
            </p>
            <p>
              Since a tournament of this format is going to be difficult to fit into a single day, especially with all of the Group Stage matchups, the tournament will be played over the course of an entire week.
            </p>
            <p>
              All Group Stage matchups must be played within 4 days of the tournament start date, and a Knockout Stage round must be played at 8:00pm EST on each subsequent day. Specific dates will be posted when registration is complete. If there are conflicts with time slots, players may agree on an alternative time to play their Knockout Stage match.
            </p>

            <p>
              Knockout Stage starting map is as follows:
            </p>
            <ul>
              <li>Quarter Finals: Terenas Stand</li>
              <li>Semi Finals: Twisted Meadows</li>
              <li>Final: Echo Isles</li>
            </ul>
            <p>
              Mappool:
            </p>
            <ul>
              <li>Terenas Stand</li>
              <li>Echo Isles</li>
              <li>Secret Valley</li>
              <li>Twisted Meadows</li>
              <li>Turtle Rock</li>
              <li>Lost Temple</li>
              <li>Gnoll Wood</li>
            </ul>
            <p>
              Rules:
            </p>
            <ul>
              <li>All replays must be uploaded to our <Link className="link-brand" to="/replays">Replays Repository</Link> by the winner of the series.</li>
              <li>All participants must belong to Clan iOg or Clan iOgX.</li>
              <li>Participants must register with their Battle.net account name.</li>
              <li>All matches must include an observer from Clan iOg.</li>
              <li>FatRedBelly must not advance past the Group Stage.</li>
            </ul>

            {/* {!!this.state.participants.length &&
              <Fragment>
                <p>Participants:</p>
                <div className="table-responsive u-m-t">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Status</th>
                        <th scope="col">Registration Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.participants.map((item) => (
                        <tr key={item.participant.id}>
                          <th scope="row">{item.participant.seed}</th>
                          <td>{item.participant.name}</td>
                          <td>{item.participant.on_waiting_list ? 'Waiting List' : 'Active'}</td>
                          <td>{dateFns.format(item.participant.created_at, 'MM/DD/YYYY')}</td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>
                </div>
              </Fragment>
            }

            <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#registrationModal">
              Register
            </button>

            <div className="modal fade" id="registrationModal" tabIndex="-1" role="dialog" aria-labelledby="registrationModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    {this.state.error &&
                      <div className="alert alert-danger" role="alert">
                        Registration Failed.
                      </div>
                    }
                    <div className="form-group u-m-t">
                      <input className="form-control" value={this.state.participantName} name="participantName" onChange={this.handleChange} placeholder="Participant Name" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button disabled={this.state.formInProgress} onClick={() => this.handleRegistration('sa42jwk9')} className="btn btn-outline-dark">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            <p className="font-italic u-m-t">
              If you have any issues with registration or questions about the tournament in general, feel free to reach out to BLinK on Battle.net.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tournament;

