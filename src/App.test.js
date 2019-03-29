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

    expect(app.instance().scoreBoard.length).toBe(20);
  })

});
