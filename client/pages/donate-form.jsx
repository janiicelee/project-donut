import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      fileUrl: '',
      userId: null
    };
    this.fileInputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Thank you for donating!');
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('content', this.state.content);
    formData.append('userId', this.state.userId);
    formData.append('fileUrl', this.fileInputRef.current.files[0]);

    fetch('/api/uploads', {
      method: 'POST',
      headers: { 'x-access-token': window.localStorage.getItem('donut-jwt') },
      body: formData
    })
      .then(response => response.json())
      .then(resBody => {
        this.setState({
          title: resBody.title,
          content: resBody.content,
          fileUrl: resBody.fileUrl,
          userId: resBody.userId
        });
        this.fileInputRef.current.value = null;
        window.location.hash = '#';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleFile(event) {
    this.setState({
      fileUrl: URL.createObjectURL(event.target.files[0])
    });
  }

  handleContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    const placeholder = this.state.fileUrl ? this.state.fileUrl : 'images/pink-donut.jpeg';
    return (
      <div className="container">
        <div className="color-overlay d-flex justify-content-center align-items-center mh-100 ">
          <Form className="rounded p-4 p-sm-3 form" onSubmit={this.handleSubmit}>
            <h4 className="text-center font-weight-bold">Start donating your item!</h4>
            <img src={placeholder} alt="placeholder" className="item-img img-fluid"></img>
            <Form.Group className="mb-3" controlId="FormTitle">
              <Form.Label>What is your item?</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Title"
                value={this.state.title}
                onChange={this.handleTitle} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormImage">
              <Form.Label>What does it look like?</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={this.fileInputRef}
                accept=".png, .jpg, .jpeg, .gif, .webp"
                onChange={this.handleFile} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tell me about your item!</Form.Label>
              <Form.Control
                name="content"
                as="textarea"
                placeholder="Describe your item and why you're donating it"
                style={{ height: '150px' }}
                value={this.state.content}
                onChange={this.handleContent} />
            </Form.Group>
            <Button variant="primary" size="sm" type="submit" className="donate-button">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
