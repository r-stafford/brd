import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import {Login} from './login/login';
import {Home} from './home/home';
import AuthenticationService from './services/authentication/AuthenticationService';

export default class App extends React.Component {

  componentDidMount() {
    var username = localStorage.getItem('username');
    var token = localStorage.getItem('token');
    if ((username !== null) && (token !== null)) {
      try {
        var authService = new AuthenticationService();
        authenticationVar.isAuthenticated = authService.validateExistingUser(username, token);
      } catch (err) {
        authenticationVar.isAuthenticated = false;
      }
    }
  }

  signout(cb) {
    authenticationVar.isAuthenticated = false;
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  render() {
    const { services, authenticationVar } = this;


    return (<Router>
              <div>
                <AuthUser path="/" component={<Home />} />
              </div>
            </Router>);
  }

}


const AuthUser = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticationVar.isAuthenticated ? (
        <Home />
      ) : (
        <Login />
      )
    }
  />
);


const authenticationVar = {
  isAuthenticated: true
};

ReactDOM.render(
  <App/>,
  document.querySelector('.application'));
