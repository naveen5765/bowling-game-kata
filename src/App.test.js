import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import FrameComponent from './components/Frame-component';

describe("Bowling Game", () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  })

  it("Should display 10 frames in a table structure", () =>{
    expect(app.find(FrameComponent).length).toBe(10);
  }) 

  it("Should show a start button and on click of it, generate 20 or 21 random rolls", () => {
    app.find('.btn_generate').simulate('click');

    expect(app.instance().state.scoreBoard.length).toBeGreaterThanOrEqual(20);
    expect(app.instance().state.scoreBoard.length).toBeLessThanOrEqual(21);
  })

  it("Should set the limit of random numbers from 0 to 10", () => {
    let isRollInLimit = true;

    app.instance().rollPins()

    app.instance().scoreBoard.forEach((roll) => {
      roll > 10 && (isRollInLimit = false);
    })

    expect(isRollInLimit).toBeTruthy();
  })

  it("Should not exceed a total of 10 per frame", () => {
    let totalFrameCountNotMoreThan10 = true;

    app.instance().rollPins();
    const scoreBoard = app.instance().state.scoreBoard;
    for(let i=0, j=0; i<10; i++, j=j+2){
      scoreBoard[j] + scoreBoard[j+1] > 10 && (totalFrameCountNotMoreThan10 = false)
    }
    
    expect(totalFrameCountNotMoreThan10).toBeTruthy();
  })

  it("Should provide an extra change in the 10th Frame if the player scores a Strike", () => {
    let totalRollsInFrame10 = false;

    app.instance().generateRandomValue = (max) => {
      return 10;
    }

    app.instance().rollPins();
    const scoreBoard = app.instance().state.scoreBoard;
    if(scoreBoard[18] === 10 && scoreBoard.length === 21){
      totalRollsInFrame10 = true
    }

    expect(totalRollsInFrame10).toBeTruthy();
  })

});
