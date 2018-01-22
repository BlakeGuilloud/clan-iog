import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import UploadReplayForm from './components/UploadReplayForm';
import ReplayList from './components/ReplayList';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route exact path="/" component={ReplayList} />
          <Route path="/upload" component={UploadReplayForm} />
        </div>
      </Router>
    );
  }
}

export default App;
