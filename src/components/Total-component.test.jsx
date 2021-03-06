import React from 'react';
import { shallow } from 'enzyme';
import TotalComponent from './Total-component';

describe("Bowling Game Score Calculator", () => {
  let frame;

  it("Should calculate the total score as 0 when all the rolls are 0", () =>{
    let total = shallow(<TotalComponent scoreBoard={[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("0");
  }) 

  it("Should calculate the total score as 20 when all the rolls are 1", () =>{
    let total = shallow(<TotalComponent scoreBoard={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("20");
  }) 

  it("Should calculate the total score as 29 when the first two rolls are 5 and other rolls are 1", () =>{
    let total = shallow(<TotalComponent scoreBoard={[5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("29");
  }) 

  it("Should calculate the total score as 30 when the first frame is a Strike and other rolls are 1", () =>{
    let total = shallow(<TotalComponent scoreBoard={[10,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("30");
  }) 

  it("Should calculate the total score as 150 when all the rolls are 5, that is all the frames are spare", () =>{
    let total = shallow(<TotalComponent scoreBoard={[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("150");
  })

  it("Should calculate the total score as 300 for a perfect game", () =>{
    let total = shallow(<TotalComponent scoreBoard={[10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,10,10]}/>);
    let score = total.find('.total span').at(1).text();
    expect(score).toBe("300");
  })
  
});

