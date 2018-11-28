import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbotron" id="jumbotron">
        <div className="custom-nav">
          <Link to={'./home'}><h3>Home</h3></Link>
          <Link to={'./about'}><h3>About</h3></Link>
          <Link to={'./counselors'}><h3>Counselors</h3></Link>
          <Link to={'./counselorsLogin'}><h3>Login</h3></Link>
          <Link to={'./usersLogin'}><h3>Users</h3></Link>
          <Link to={'./intake'}><h3>Intake</h3></Link>
        </div>
        <h1 className="display-1">Welcome</h1>
      </Jumbotron>
    </div>
  );
};

export default Header;