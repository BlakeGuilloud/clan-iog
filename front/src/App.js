import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './css/App.css';

import About from './components/About';
import Contact from './components/Contact';
import Discord from './components/Discord';
import Header from './components/Header';
import Home from './components/Home';
import Media from './components/Media';
import ReplayList from './components/ReplayList';
import Shaman from './components/Shaman';
import Tech from './components/Tech';
import Tournament from './components/Tournament';
import UploadReplayForm from './components/UploadReplayForm';
import Youtube from './components/Youtube';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/discord" component={Discord} />
            <Route path="/media" component={Media} />
            <Route path="/replays" component={ReplayList} />
            <Route path="/shaman" component={Shaman} />
            <Route path="/tech" component={Tech} />
            <Route path="/tournament" component={Tournament} />
            <Route path="/upload" component={UploadReplayForm} />
            <Route path="/youtube" component={Youtube} />
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
