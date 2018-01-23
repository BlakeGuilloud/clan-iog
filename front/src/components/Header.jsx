import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

class Header extends Component {
  pushRoute = (path = '/') => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img className="logo" src="/images/logo.png" alt=""/>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Replays" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={() => this.pushRoute('/replays')}>
                View Replays
              </MenuItem>
              <MenuItem eventKey={3.2} onClick={() => this.pushRoute('/upload')}>
                Upload Replay
              </MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="https://www.youtube.com/channel/UCG1jMFXcWXHhC6sri8JLqtg">
              Youtube
            </NavItem>
            <NavItem eventKey={2} href="#">
              Discord
            </NavItem>
            <NavItem eventKey={3} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Header);