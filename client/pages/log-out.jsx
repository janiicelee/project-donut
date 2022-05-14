import React from 'react';
import { Button } from 'react-bootstrap';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    window.localStorage.removeItem('donut-jwt');
    this.setState({ user: null });
    window.location.hash('#sign-up');
  }

  render() {
    const { handleLogout } = this;
    return (
      <div className="container">
        <div className="color-overlay d-flex justify-content align-items-center">
          <Button onChange={handleLogout}>Log Out</Button>
        </div>
      </div>
    );

  }
}
