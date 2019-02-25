import React, {Component} from 'react';
import './App.css';
import {Clock, List} from './component';

class App extends Component {
  render() {
    return (
      <main className="app-main">
        <Clock/>
        <List/>
      </main>
    );
  }
}

export default App;
