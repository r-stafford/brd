import React from 'react';
import Rnd from 'react-rnd';
import { keys } from 'lodash';

export default class Widget extends React.Component {

  static DEFAULT = {
    x: 0,
    y: 0,
    height: 100,
    width: 200
  };

  static Heading(props) {
    return (
      <div className="widget-heading">
        { props.children }
      </div>
    );
  }

  static Footer(props) {
    return (
      <div className="widget-footer">
        { props.children }
      </div>
    );
  }

  static Body(props) {
    return (
      <div className="widget-body">
        { props.children }
      </div>

    );
  }

  render() {
    const { props } = this;

    return (
      <Rnd 
        className={ `widget-container ${props.className || ''}` }
        bounds={ props.bounds || 'parent' }
        default={ props.default || Widget.DEFAULT }
        onResize={ props.onResize }
        onDragStop={ props.onDragStop }
        ref={ component => { this.rnd = component; }}> 
        { props.children }
      </Rnd>
    );
  }

}
