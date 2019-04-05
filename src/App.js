import React, { Component } from 'react';
import './App.css';
import FrameComponent from './components/Frame-component';

class App extends Component {
  constructor(){
    super();
    this.scoreBoard = [];
  }

  state = {
    scoreBoard: []
  }

  rollPins = () =>{
    let scoreBoard = [];
    for(let i=0; i<10; i++){
      const roll1 = Math.round(Math.random() * 10);
      const roll2 = Math.round(Math.random() * (10-roll1));

      scoreBoard.push(roll1);
      scoreBoard.push(roll2);
    }
    this.setState({
      scoreBoard
    })
  }

  getFrames = () =>{
    let frameList = [];
    for(let i=0; i<20; i=i+2){
      frameList.push(
        <FrameComponent key={i}    
          roll1={this.state.scoreBoard[i]} 
          roll2={this.state.scoreBoard[i+1]}/>
      );
    }
    return frameList;
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
            {this.getFrames()}
        </div>
      </div>
    );
  }
}

export default App;
