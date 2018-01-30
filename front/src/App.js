import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './css/App.css';

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Discord from './components/Discord';
import Shaman from './components/Shaman';
import Tournament from './components/Tournament';
import Youtube from './components/Youtube';
import ReplayList from './components/ReplayList';
import UploadReplayForm from './components/UploadReplayForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/replays" component={ReplayList} />
            <Route path="/upload" component={UploadReplayForm} />
            <Route path="/discord" component={Discord} />
            <Route path="/shaman" component={Shaman} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/contact" component={Contact} />
            <Route path="/tournament" component={Tournament} />
          </div>
          <div className="footer">
            Clan iOg | Copyright&copy;	2018
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
