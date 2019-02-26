import React, {Component} from 'react';
import './App.css';
import {Clock, List, Notes} from './component';

class App extends Component {
  render() {
    return (
      <div>
        <main className="app-main">
          <Clock/>
          <List/>
        </main>
        <Notes/>
      </div>
    );
  }
}

export default App;
