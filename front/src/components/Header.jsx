import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Button,
} from 'react-bootstrap';

class Header extends Component {
  render() {
    const showUploadButton = window.location.pathname === '/';

    return (
      <Jumbotron className="header">
        <h1>iOg Replays</h1>
        <p>
          This is a very basic site for uploading and downloading Warcraft 3 replays. Brought to you by Clan iOg!
        </p>
        <p>
          This project is in it's very early stages. Please be patient with any bugs you may encounter. Feel free to report them to me at <a href="mailto:fbguillo@gmail.com" target="_top">fbguillo@gmail.com</a>
        </p>
        <p>
          {
            showUploadButton ?
              <Link to="/upload">
                <Button bsStyle="primary">Upload Replay</Button>
              </Link>
              :
              <Link to="/">
                <Button bsStyle="primary">View Replays</Button>
              </Link>
          }
        </p>
      </Jumbotron>
    )
  }
}

export default Header;