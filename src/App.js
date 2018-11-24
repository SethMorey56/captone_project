import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Counselors from './components/Counselors';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path='/home' component={Homepage}/>
        <Route path='/counselors' component={Counselors}/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
