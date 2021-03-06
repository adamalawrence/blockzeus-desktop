import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ReactGA from 'react-ga';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, PublicOnly } from '../_components';

import Account from '../Components/Account/Account';
import LoginPage from './Account/LoginPage';
import RegisterPage from './Account/RegisterPage';
import Dashboard from '../Components/Dashboard';
import Demo from '../Components/Demo';
import NotFound from './Site/NotFound';
import LandingPage from './Site/LandingPage';

// import '../App.css';

ReactGA.initialize('UA-58206630-6'); // Unique Google Analytics tracking number

class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   dispatch(alertActions.clear());
    // });
  }

  fireTracking() {
    ReactGA.pageview(window.location.hash);
  }

  render() {
    const { alert } = this.props; // TODO: add success/alert messages
    return (
      <Router onUpdate={this.fireTracking} history={history}>
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          {/* <Route exact path="/demo" component={Demo} /> */}
          {/* <PublicOnly exact path="/" component={LandingPage} /> */}
          {/* <PublicOnly exact path="/login" component={LoginPage} /> */}
          {/* <PublicOnly exact path="/register" component={RegisterPage} /> */}
          <Route path="/" component={Dashboard} />
          <Route path="/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
