import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './css/App.css';


import Header from './components/Header';
import Home from './components/Home';
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
            <Route path="/replays" component={ReplayList} />
            <Route path="/upload" component={UploadReplayForm} />
          </div>
          <div className="footer">
            2018 | Clan iOg
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
