import BarChart from 'react-chartjs';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import {Widget} from '../shared/widget/Widget'

import React from 'react';
import ReactDOM from 'react-dom';

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: ""
    };
    Widget.Heading({children: "Bar Chart"});
    Widget.Footer({children: "I have no idea"});
    Widget.Body({children: <BarChart data={this.state.chartData} width="600" height="250"/>});
  }

  componentDidMount() {
    axios.get('http://0.0.0.0:5000/employees').then(
      response => this.setState({chartData: response.data})
    );
  }
  render() {
    return (<div><Widget {...props} /></div>)
  }
}
