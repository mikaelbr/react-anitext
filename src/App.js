import AnimatedText from './animated-text';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">
          <AnimatedText>Hello, World!</AnimatedText>
        </h1>
      </div>
    );
  }
}

export default App;
