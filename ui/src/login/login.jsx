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
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Home from '../home/home';
import AuthenticationService from '../services/authentication/AuthenticationService';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleLogin(event) {
    var authenticationService = new AuthenticationService();
    authenticationService.authenticate(this.state.username, this.state.password);
    return(<Home/>);
  }

  render() {
    const { services } = this;
    const { username } = this.state;
    return (<form>
      <div className="form-group">
        <label>User Name</label>
        <input className="form-control" id="userName" aria-describedby="usernameHelp" placeholder="Enter user name"  value={this.state.username} onChange={this.handleUsernameChange}  />
        <small id="usernameHelp" className="form-text text-muted">Put a user name.  Any user name.</small>
        <input className="form-control" type="password" id="password" aria-describedby="passwordHelp" placeholder="Enter password"  value={this.state.password} onChange={this.handlePasswordChange}  />

      </div>
      <button onClick={this.handleLogin}>Log in</button>
    </form>);
  }
}
