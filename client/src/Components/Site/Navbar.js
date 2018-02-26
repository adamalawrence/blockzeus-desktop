import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../_helpers';


import { userActions } from '../../_actions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDirectToLogin = this.handleDirectToLogin.bind(this);
  }

  handleLogout() {
    // e.preventDefault();

    console.log('logging out');
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  handleDirectToLogin() {
    history.push('/login');
  }
  handleDirectToSignup() {
    history.push('/register');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark navbar-bz-purple">
        <Link to={localStorage.getItem('user') ? '/dashboard' : '/login'} className="navbar-brand abs" href="">BlockZeus</Link>
        <a className="blockzeus-comment pl-lg-2">Cryptocurrency Manager</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">

          {/* If user is not logged in, TODO: handling auth logic redirects in Navbar doesn't seem right..., fix */}
          {!localStorage.getItem('user') &&
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="" data-toggle="modal" onClick={this.handleDirectToSignup}>Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login" data-toggle="modal" onClick={this.handleDirectToLogin}>Log In</a>
              </li>
            </ul>
          }

          {/* If user is logged in */}
          {localStorage.getItem('user') &&
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/account" className="nav-link">Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="" data-toggle="modal" onClick={this.handleLogout}>Log out</Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  console.log(state.authentication);
  return {
    loggedIn,
  };
}

const connectedNavbar = connect(mapStateToProps)(Navbar);
export default connectedNavbar;

