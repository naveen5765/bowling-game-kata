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

  it("Should display empty in roll2 when roll1 is 10", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={0}/>);
    let roll2 = frame.find('.frame span').at(1).text();

    expect(roll2).toEqual("");
  }) 

  it("Should display '/' in roll2 when roll1 is not 10, but sum of roll1 and roll2 is 10", () =>{
    let frame = shallow(<FrameComponent roll1={6} roll2={4}/>);
    let roll2 = frame.find('.frame span').at(1).text();

    expect(roll2).toEqual("/");
  }) 
  
});

describe('10th Frame', () => {
  it("Should display roll3 for 10th Frame when the previous rolls are either Spare or Strike", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={0} roll3={5} index={10}/>);
    let roll3 = frame.find('.frame span').at(2).text();

    expect(roll3).toEqual("5");
  }) 

  it("Should display Strike in roll 2 if the roll 2 and roll 1 value is 10", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={10} roll3={5} index={10}/>);
    let roll2 = frame.find('.frame span').at(1).text();

    expect(roll2).toEqual("X");
  }) 

  it("Should display Strike in roll 3 if the roll 1, 2 and 3 values are 10", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={10} roll3={10} index={10}/>);
    let roll3 = frame.find('.frame span').at(2).text();

    expect(roll3).toEqual("X");
  }) 

  it("Should display Spare in roll 3 if the roll 1 is Strike and sum of roll 2 and 3 is 10", () =>{
    let frame = shallow(<FrameComponent roll1={10} roll2={7} roll3={3} index={10}/>);
    let roll3 = frame.find('.frame span').at(2).text();

    expect(roll3).toEqual("/");
  }) 
})

