import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $('#navbarNavDropdown').click(() => {
      $('.navbar-toggler:visible').click();
    });
  }

  pushRoute = (path = '/') => {
    this.props.history.push(path);
  }

  render() {
    const pathIncludes = name =>
      window.location.pathname.includes(name);

    const navItems = [
      {
        image: '/images/icons/replays.png',
        route: '/replays',
        title: 'Replays',
        active: pathIncludes('replays') || pathIncludes('upload'),
      },
      {
        image: '/images/icons/youtube.jpg',
        route: '/news',
        title: 'News',
        active: pathIncludes('news'),
      },
      // {
      //   image: '/images/icons/shaman.jpg',
      //   route: '/tournaments',
      //   title: 'Tournaments',
      //   active: pathIncludes('tournaments'),
      // },
      {
        image: '/images/icons/about.png',
        route: '/about',
        title: 'About',
        active: pathIncludes('about'),
      },
      {
        image: '/images/icons/tech.png',
        route: '/tech',
        title: 'Tech',
        active: pathIncludes('tech'),
      },
      {
        image: '/images/icons/discord.jpg',
        route: '/discord',
        title: 'Discord',
        active: pathIncludes('discord'),
      },
      {
        image: '/images/icons/youtube.jpg',
        route: '/youtube',
        title: 'Youtube',
        active: pathIncludes('youtube'),
      },
    ];

    return (
      <nav className="navbar navbar-expand-xl navbar-light">
        <button style={{outline: 'none'}} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand" href="#">
          <img src="/images/logo.png" width="250" className="d-inline-block align-top" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navItems.map(item => (
              <li className={`nav-item ${item.active ? 'active' : ''}`} key={item.route}>
                <Link to={item.route} className="nav-link">
                  {/* <img src={item.image} className="rounded header-menu__item-image" width="30" alt="" /> */}
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