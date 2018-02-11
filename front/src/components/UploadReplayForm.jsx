import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// import {
//   Button,
//   Form,
//   FormGroup,
//   Col,
//   FormControl
// } from 'react-bootstrap';

import Team from './Team';
import * as Actions from '../actions';
import * as helpers from '../helpers';

class UploadReplayForm extends Component {
  static initialState = {
    bucketKey: '',
    description: '',
    disableSave: true,
    fileName: '',
    replay: {},
    showPreview: false,
    teams: [],
    uploadLoading: false,
  };

  state = UploadReplayForm.initialState;

  handleUploadFile = (event) => {
    this.setState({ uploadLoading: true });

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.addEventListener('load', () => {
      const payload = {
        fileData: reader.result,
        fileType: file.type,
        fileName: `wc3-${file.name}`,
      };

      Actions.uploadFile(payload)
        .then(data => {
          this.setState({
            bucketKey: data.bucketKey,
            disableSave: false,
            fileName: data.fileName.split('.w3g')[0],
            map: data.replay.game.map,
            replay: data.replay,
            showPreview: true,
            teams: data.replay.teams,
            uploadLoading: false,
          });
        });
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      disableSave: true,
    });

    const payload = {
      bucketKey: this.state.bucketKey,
      description: this.state.description,
      data: this.state.replay,
    };

    Actions.renameFile({ bucketKey: this.state.bucketKey, fileName: `${this.state.fileName}.w3g` })
      .then(() => Actions.createReplay(payload))
      .then(() => {
        this.props.history.push('/replays');
      });
  }

  render() {
    const teams = helpers.getValidTeams(this.state.teams);

    return (
      <form className="replay-form">
        <div className="form-group">
          <h3>Upload</h3>
          {this.state.uploadLoading && <div className="loader">Loading...</div>}
          <div class="custom-file">
            <input type="file" onChange={this.handleUploadFile} accept=".w3g" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
        </div>
        {
          this.state.showPreview &&
              <Fragment>
                <div className="form-group">
                  <h3>Name</h3>
                  <input className="form-control" value={this.state.fileName} name="fileName" onChange={this.handleChange} placeholder="Replay Name" />
                </div>
                <div className="form-group">
                  <h3>Players</h3>
                  <div className="replay__item-teams">
                    {teams.map((team, idx) => {
                      return <Team showVS={idx + 1 === teams.length} team={team} key={idx} />;
                    })}
                  </div>
                  <div className="replay__item-map">
                    {helpers.formatMap(this.state.map)}
                  </div>
                </div>
                <div className="form-group">
                  <h3>Description</h3>
                  <input className="form-control" value={this.state.description} name="description" onChange={this.handleChange} componentClass="textarea" rows="10" placeholder="Replay Description" />
                </div>
              </Fragment>
        }
        {
          this.state.showPreview &&
            <div class="form-group">
              <div>
                <button className="btn btn-dark" disabled={this.state.disableSave} onClick={this.handleSubmit} type="submit">Submit Replay</button>
              </div>
            </div>
        }
      </form>
    );
  }
}

export default withRouter(UploadReplayForm);