import React from 'react';

export default class DonateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert('Thank you for donating!');
    // console.log('state: ', this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}
