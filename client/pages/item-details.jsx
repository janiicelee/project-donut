import React from 'react';

const styles = {
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'contain'
  },
  content: {
    whiteSpace: 'pre-wrap',
    fontSize: 20,
    marginLeft: 10
  }
};

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      userId: 1
    };
  }

  componentDidMount() {
    fetch(`/api/items/${this.props.itemId}`)
      .then(res => res.json())
      .then(item => this.setState({ item }));
  }

  render() {
    if (!this.state.item) return null;
    const { title, fileUrl, username, content, uploadedAt, location } = this.state.item;
    return (
      <div className="container">
        <hr />
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <a href="" className="btn text-secondary">
                  &lt; Back to main page
                </a>
              </div>
            </div>
            <hr />
            <div className="row mb-4">
              <div className="col-12 col-sm-6 col-md-5">
                <img src={fileUrl} alt={title} style={styles.image} />
              </div>
              <div className="col-12 col-sm-6 col-md-7">
                <hr />
                <h2>{ title }</h2>
                <hr />
                <h5><span><img src="images/donut.png" className="donut-icon"/></span>Donator: { username }</h5>
                <h5><span><img src="images/donut.png" className="donut-icon"/></span>Donated Date: { uploadedAt.slice(0, 10)}</h5>
                <h5><span><img src="images/donut.png" className="donut-icon"/></span>Location: {location}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p style={styles.content}>
                  { content }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
