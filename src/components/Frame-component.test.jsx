import React from 'react';
import { shallow } from 'enzyme';
import FrameComponent from './Frame-component';

describe("Bowling Game", () => {
  let app;
  beforeEach(() => {
    app = shallow(<FrameComponent />);
  })

  it("Should have 2 colums in each frame", () =>{
    let frameColumnsLength = app.find('.frame').at(0).childAt(1).find("span").length;

    expect(frameColumnsLength).toBe(2);
  }) 

});
