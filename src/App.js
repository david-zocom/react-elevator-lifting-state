import React, { Component } from 'react';
import './App.css';
import Interface from './elevator/Interface.js';

class App extends Component {
  render() {
    return (
      <div>
        <Interface floors={['E', '3', '4', '5', '7']}/>

      </div>
    );
  }
}

export default App;
