import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <div className="custom-nav">
          <Link to={'./home'}><h2>Home</h2></Link>
          <Link to={'./about'}><h2>About</h2></Link>
          <Link to={'./counselors'}><h2>Counselors</h2></Link>
          <Link to={'./counselorsLogin'}><h2>Counselors Login</h2></Link>
          <Link to={'./usersLogin'}><h2>Users</h2></Link>
          <Link to={'./intake'}><h2>Intake</h2></Link>
        </div>
        <h1 className="display-1">Welcome</h1>
        <p className="lead">
          {/* <Button color="primary">Learn More</Button> */}
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;