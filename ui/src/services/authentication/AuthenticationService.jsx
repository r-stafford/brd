import axios from 'axios';
import { get, indexOf } from 'lodash';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { extend, reduce } from 'lodash';

export default class AuthenticationService {

  static jwtDecode = jwtDecode;
  static moment = moment;

  validateExistingUser(username, token) {
    jwt.verify(token, username, function(err, decoded) {
      if (err) {
        return false;
      }
      else {
        return true;
      }
    });
  }

  authenticate(username, password) {
    var jwt = require('jsonwebtoken');
    jwt.sign({ data: username }, password, { expiresIn: '10m' }, function(err, token) {
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
    });
  }
}
