import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

import '../css/Header.css';

class Header extends Component {
  pushRoute = (path = '/') => {
    this.props.history.push(path);
  }

  render() {
    const replayTitle = () => (
      <Fragment>
        <img src="/images/icons/replays.png" alt=""/>
        <span>Replays</span>
      </Fragment>
    );

    return (
      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="logo-container">
                <img className="logo" src="/images/logo.png" alt=""/>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavDropdown eventKey={3} title={replayTitle()} id="basic-nav-dropdown" className="app-nav__item">
              <MenuItem eventKey={3.1} onClick={() => this.pushRoute('/replays')}>
                View Replays
              </MenuItem>
              <MenuItem eventKey={3.2} onClick={() => this.pushRoute('/upload')}>
                Upload Replay
              </MenuItem>
            </NavDropdown>

            <NavItem className="app-nav__item" eventKey={3} onClick={() => this.pushRoute('/about')}>
              <img src="/images/icons/about.png" alt=""/>
              <span>About</span>
            </NavItem>

            <NavItem className="app-nav__item" eventKey={1} onClick={() => this.pushRoute('/shaman')}>
              <img src="/images/icons/shaman.jpg" alt=""/>
              <span>Shaman</span>
            </NavItem>

            {/* <NavItem className="app-nav__item" eventKey={1} onClick={() => this.pushRoute('/tournament')}>
              <img src="/images/icons/shaman.jpg" alt=""/>
              <span>Tournaments</span>
            </NavItem> */}

            <NavItem className="app-nav__item" eventKey={2} onClick={() => this.pushRoute('/discord')}>
              <img src="/images/icons/discord.jpg" alt=""/>
              <span>Discord</span>
            </NavItem>
            <NavItem className="app-nav__item" eventKey={1} onClick={() => this.pushRoute('/youtube')}>
              <img src="/images/icons/youtube.jpg" alt=""/>
              <span>Youtube</span>
            </NavItem>
            {/* <NavItem className="app-nav__item" eventKey={1} onClick={() => this.pushRoute('/contact')}>
              <img src="/images/icons/contact.jpg" alt=""/>
              <span>Contact</span>
            </NavItem> */}

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);