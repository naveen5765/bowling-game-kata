import React from 'react';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FrameComponent from './Frame-component';

configure({ adapter: new Adapter() });

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
