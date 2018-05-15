import axios from 'axios';
import { get, indexOf } from 'lodash';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { extend, reduce } from 'lodash';

export default class EmployeeService {

  getAllEmployeeRecords() {
    axios.get('http://0.0.0.0:5000/employees').then(
      response => console.log(response)
    );
  }
}
