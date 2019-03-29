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

  it("Should show a start button and on click of it, generate 20 random rolls", () => {
    app.find('.btn_generate').simulate('click');

    expect(app.instance().state.scoreBoard.length).toBe(20);
  })

  it("Should set the limit of random numbers from 0 to 10", () => {
    let isRollInLimit = true;

    app.instance().rollPins()

    app.instance().scoreBoard.forEach((roll) => {
      roll > 10 && (isRollInLimit = false);
    })

    expect(isRollInLimit).toBeTruthy();
  })
  

});
