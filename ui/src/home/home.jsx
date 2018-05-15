import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import axios from 'axios';

import {Bar} from '../charts/barChart';
import {Pie} from '../charts/pieChart';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData:""
    }
    axios.get('http://0.0.0.0:5000/employees').then(
      response => this.setState({chartData: response.data})
    );
  }

  render() {
    if (this.state !== null) {
      return (<table className="MyClassName">
            <thead>
              <tr>
                {this.state.chartData.map(rec =>
                  <th key={rec}>{rec}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {this.state.chartData.rows.map((row, i) =>
                <tr key={i}>
                  {row.map((col, j) =>
                    <td key={j}>{col}</td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        );
      }
      else {
        return (<div> No data </div>)
      }
  }
}
