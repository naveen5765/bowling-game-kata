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
  
});

