import React, { Component } from 'react';
import Routes from './router'
import logo from './logo.svg';
import './App.css';

const apiUrl = 'https://cnodejs.org/api/v1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
