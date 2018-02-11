import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  pushRoute = (path = '/') => {
    this.props.history.push(path);
  }

  render() {
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
      // {
      //   image: '/images/icons/discord.jpg',
      //   route: '/media',
      //   title: 'Media',
      //   active: window.location.pathname.includes('media'),
      // },
      {
        image: '/images/icons/discord.jpg',
        route: '/discord',
        title: 'Discord',
        active: window.location.pathname.includes('discord'),
      },
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
      {
        image: '/images/icons/shaman.jpg',
        route: '/tournaments',
        title: 'Tournaments',
        active: window.location.pathname.includes('tournaments'),
      },
      {
        image: '/images/icons/youtube.jpg',
        route: '/youtube',
        title: 'Youtube',
        active: window.location.pathname.includes('youtube'),
      },
    ];

    return (
      <nav className="navbar navbar-expand-xl navbar-light">
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
                <Link to={item.route} className="nav-link header-menu__item">
                  <img src={item.image} className="rounded header-menu__item-image" width="30" alt="" />
                  <span>{item.title}</span>
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