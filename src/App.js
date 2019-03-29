import React, { Component } from 'react';
import './App.css';
import FrameComponent from './components/Frame-component';

class App extends Component {
  constructor(){
    super();
    this.scoreBoard = [];
  }

  rollPins = () =>{
    for(let i=0; i<20 ; i++){
      this.scoreBoard.push(Math.round(Math.random() * 10));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Bowling Game
          </h1>
        </header>
        <button 
          className="btn_generate"
          onClick={this.rollPins}>Start</button>
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
