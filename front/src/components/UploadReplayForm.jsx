import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Col,
  FormControl,
} from 'react-bootstrap';

import Team from './Team';
import * as Actions from '../actions';
import * as helpers from '../helpers';

class UploadReplayForm extends Component {
  static initialState =  {
    bucketKey: '',
    description: '',
    fileName: '',
    replay: {},
    teams: [],
    disableSave: true,
    showPreview: false,
  };

  state = UploadReplayForm.initialState;

  handleUploadFile = (event) => {
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
            replay: data.replay,
            teams: data.replay.teams,
            map: data.replay.game.map,
            fileName: data.fileName.split('.w3g')[0],
            disableSave: false,
            showPreview: true,
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
        this.props.history.push('/');
      });
  }

  render() {
    const teams = helpers.getValidTeams(this.state.teams);

    return (
      <Form className="replay-form" horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={6} smOffset={3}>
            <h3>Upload</h3>
            <FormControl onChange={this.handleUploadFile} type="file" placeholder="File" />
          </Col>
          {
            this.state.showPreview &&
              <Fragment>
                <Col sm={6} smOffset={3}>
                  <h3>Name</h3>
                  <FormControl value={this.state.fileName} name="fileName" onChange={this.handleChange} placeholder="Replay Name" />
                </Col>
                <Col sm={6} smOffset={3}>
                  <h3>Players</h3>
                  <div className="replay__item-teams">
                    {teams.map((team, idx) => {
                      return <Team showVS={idx + 1 === teams.length} team={team} key={idx} />
                    })}
                  </div>
                  <div className="replay__item-map">
                    {helpers.formatMap(this.state.map)}
                  </div>
                </Col>
                <Col sm={6} smOffset={3}>
                  <h3>Description</h3>
                  <FormControl value={this.state.description} name="description" onChange={this.handleChange} componentClass="textarea" rows="10" placeholder="Replay Description" />
                </Col>
              </Fragment>
          }
        </FormGroup>
        {
          this.state.showPreview &&
            <FormGroup>
              <Col sm={6} smOffset={3}>
                <Button disabled={this.state.disableSave} onClick={this.handleSubmit} bsStyle="primary" type="submit">Submit Replay</Button>
              </Col>
            </FormGroup>
        }
      </Form>
    )
  }
}

export default withRouter(UploadReplayForm);