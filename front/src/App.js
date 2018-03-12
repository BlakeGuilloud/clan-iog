import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './css/App.css';

import About from './components/About';
import Discord from './components/Discord';
import Header from './components/Header';
import Home from './components/Home';
import ReplayList from './components/ReplayList';
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
            <Route path="/discord" component={Discord} />
            <Route path="/replays" component={ReplayList} />
            <Route path="/tech" component={Tech} />
            <Route path="/tournaments" component={Tournament} />
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
