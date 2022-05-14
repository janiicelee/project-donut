import React from 'react';
import Home from './pages/home';
import Catalog from './pages/catalog';
import parseRoute from './lib/parse-route';
import DonateForm from './pages/donate-form';
import ItemDetails from './pages/item-details';
import SignUpForm from './pages/sign-up';
import LoginForm from './pages/log-in';
import decodeToken from './lib/decode-token';
import Logout from './pages/log-out';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    // this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    }, false);

    const token = window.localStorage.getItem('donut-jwt');
    const user = token ? decodeToken(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  // handleLogOut() {
  //   window.localStorage.removeItem('donut-jwt');
  //   this.setState({ user: null });
  //   window.location.hash = '#sign-up';
  // }

  renderPage() {
    const { route } = this.state;
    const token = window.localStorage.getItem('donut-jwt');

    if (route.path === '') {
      return <Catalog items={this.state.items}/>;
    }

    if (route.path === 'donate' && token) {
      return <DonateForm />;
    }

    if (route.path === 'donate' && !token) {
      return <SignUpForm />;
    }

    if (route.path === 'items') {
      const itemId = route.params.get('itemId');
      return <ItemDetails itemId={itemId}/>;
    }

    if (route.path === 'user' && !token) {
      return <SignUpForm />;
    }

    if (route.path === 'login' && !token) {
      return <LoginForm />;
    }

    if (route.path === 'user' && token) {
      return <Logout />;
    }
  }

  render() {
    return (
      <>
        <Home />
        { this.renderPage() }
      </>
    );
  }
}
