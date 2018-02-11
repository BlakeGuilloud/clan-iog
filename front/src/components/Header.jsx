import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem
// } from 'react-bootstrap';

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

    const navItems = [
      {
        image: '/images/icons/about.png',
        route: '/about',
        title: 'About',
        active: window.location.pathname.includes('about'),
      },
      // {
      //   image: '/images/icons/shaman.jpg',
      //   route: '/shaman',
      //   title: 'Shaman',
      //   active: window.location.pathname.includes('shaman'),
      // },
      {
        image: '/images/icons/discord.jpg',
        route: '/media',
        title: 'Media',
        active: window.location.pathname.includes('media'),
      },
      // {
      //   image: '/images/icons/discord.jpg',
      //   route: '/discord',
      //   title: 'Discord',
      //   active: window.location.pathname.includes('discord'),
      // },
      // {
      //   image: '/images/icons/youtube.jpg',
      //   route: '/youtube',
      //   title: 'Youtube',
      //   active: window.location.pathname.includes('youtube'),
      // },
      {
        image: '/images/icons/replays.png',
        route: '/replays',
        title: 'Replays',
        active: window.location.pathname.includes('replays') || window.location.pathname.includes('upload'),
      },
      {
        image: '/images/icons/tech.png',
        route: '/tech',
        title: 'Tech',
        active: window.location.pathname.includes('tech'),
      },
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand" href="#">
          <img src="/images/logo.png" width="250" className="d-inline-block align-top" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navItems.map(item => (
              <li className={`nav-item ${item.active ? 'active' : ''}`} key={item.route}>
                <Link to={item.route} className="nav-link" href="javascript:void(0)">
                  {/* <img src={item.image} className="rounded" width="30" alt="" /> */}
                  {/* &nbsp; */}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);