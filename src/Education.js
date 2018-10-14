import React, { Component } from 'react';
import CytoscapeComponent from '../node_modules/react-cytoscapejs/src';

import GraphService from './services/GraphService';
import './Education.css';

class Education extends Component {

  render() {
    const elements = GraphService.getEducationGraph();

    return (
      <CytoscapeComponent elements={elements} className="Education" />
    );
  }
}

export default Education;
