import React, { Component } from 'react';
import Nav from './components/Nav.js'
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>App is connected</p>
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
