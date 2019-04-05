import React from 'react';
import { shallow } from 'enzyme';
import FrameComponent from './Frame-component';

describe("Bowling Game", () => {
  let frame;
  beforeEach(() => {
    frame = shallow(<FrameComponent roll1={1} roll2={5}/>);
  })

  it("Should have 2 colums in each frame", () =>{
    let frameColumnsLength = frame.find('.frame span').length;

    expect(frameColumnsLength).toBe(2);
  }) 

  it("Should display roll1 and roll2 value from props", () =>{
    let roll1 = frame.find('.frame span').at(0).text();
    let roll2 = frame.find('.frame span').at(1).text();

    expect(roll1).toEqual("1");
    expect(roll2).toEqual("5");
  }) 
});

describe("Validate Strike and Spare to be X and /", () => {
  it("Should display 'X' when roll1 is 10", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={0}/>);
    let roll1 = frame.find('.frame span').at(0).text();

    expect(roll1).toEqual("X");
  }) 
});
