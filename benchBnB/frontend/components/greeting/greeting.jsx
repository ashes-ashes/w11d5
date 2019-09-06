import React from 'react';

import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }


  render() {
    let { currentUser } = this.props;
    return (
      <div>
        <h2>{currentUser ? `Welcome, ${currentUser.username}!` : ""}</h2>
        
        { currentUser ?
          <button onClick={this.props.logout}>logout</button> :
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        }
      </div>
    )
  }
}