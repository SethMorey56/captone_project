import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <div className="custom-nav">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Counselors</h2>
          <h2>Users</h2>
          <h2>Intake</h2>
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