import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Bowling Game", () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  })

  it("Should display 10 frames in a table structure", () =>{
    expect(app.find('.scoreBoard .frame').length).toBe(10);
  }) 

  it("Should have 2 colums in each frame", () =>{
    let frameColumnsLength = app.find('.scoreBoard .frame').at(0).childAt(1).find("span").length;

    expect(frameColumnsLength).toBe(2);
  }) 

});
