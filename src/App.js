import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';

class App extends Component {
  render() {
    return (
      <main className="app-main">
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        <Clock/>
        <h1>Start Page TVN</h1>
      </main>
    );
  }
}

export default App;
