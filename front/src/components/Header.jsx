import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import '../css/Header.css';

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
              <Link to="/" className="logo">
                Clan iOg
                {/* <img className="logo" src="/images/logo.png" alt=""/> */}
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Replays" id="basic-nav-dropdown" className="app-nav__item">
              <MenuItem eventKey={3.1} onClick={() => this.pushRoute('/replays')}>
                View Replays
              </MenuItem>
              <MenuItem eventKey={3.2} onClick={() => this.pushRoute('/upload')}>
                Upload Replay
              </MenuItem>
            </NavDropdown>
            <NavItem className="app-nav__item" eventKey={3} onClick={() => this.pushRoute('/about')}>
              About
            </NavItem>
            <NavItem className="app-nav__item" eventKey={2} onClick={() => this.pushRoute('/discord')}>
              Discord
            </NavItem>
            <NavItem className="app-nav__item" eventKey={1} onClick={() => this.pushRoute('/youtube')}>
              Youtube
            </NavItem>

          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Header);