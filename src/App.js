import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Counselors from './components/Counselors';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UsersLogin from './components/UsersLogin';
import Intake from './components/Intake';
import About from './components/About';
import CounselorsLogin from './components/CounselorsLogin';
import Users from './components/Users';
import CounselorsDashboard from './components/CounselorsDashboard';
import Client from './components/Client';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path='/home' component={Homepage}/>
        <Route path='/counselors' component={Counselors}/>
        <Route path='/usersLogin' component={UsersLogin}/>
        <Route path='/intake' component={Intake}/>
        <Route path='/about' component={About}/>
        <Route path='/counselorsLogin' component={CounselorsLogin}/>
        <Route path='/users' component={Users}/>
        <Route path='/counselorsDashboard' component={CounselorsDashboard}/>
        <Route path='/client/:id' component={Client}/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
