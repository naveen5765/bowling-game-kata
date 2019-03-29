import React, { Component } from 'react';
import './App.css';
import FrameComponent from './components/Frame-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Bowling Game
          </h1>
        </header>
        <div className="scoreBoard">
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
        </div>
      </div>
    );
  }
}

export default App;
