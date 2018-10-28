import React, { Component } from 'react';
import './App.css';
import Grid from './Grid/Grid';
import config from './data';

class App extends Component {


  render() {
    return (
      <div>
          <Grid section={config.section_1.Children} />
      </div>
    );
  }
}

export default App;
