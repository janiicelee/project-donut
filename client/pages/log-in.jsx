import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('api/auth/log-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(resBody => {
        this.setState({
          email: '',
          password: ''
        });
        alert('Start donating!');
        window.location.hash = '#';
      })
      .catch(err => {
        console.error('Error ', err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="color-overlay d-flex justify-content-center align-items-center">
          <Form className="rounded p-4 p-sm-3" onSubmit={this.handleSubmit}>
            <hr />
            <h4 className="text-center font-weight-bold">
              <span><img src="images/donut.png" className="donut-icon"></img></span>
              <span><img src="images/donut.png" className="donut-icon"></img></span>
              Welcome Back!
              <span><img src="images/donut.png" className="donut-icon"></img></span>
              <span><img src="images/donut.png" className="donut-icon"></img></span>
            </h4>
            <hr />
            <Form.Group className="mb-3" controlId="FormEmail">
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePassword} />
            </Form.Group>
            <Button variant="primary" size="sm" type="submit" className="donate-button btn-block">Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}
