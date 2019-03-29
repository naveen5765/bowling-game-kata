import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FrameComponent from './components/Frame-component';

configure({ adapter: new Adapter() });

describe("Bowling Game", () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  })

  it("Should display 10 frames in a table structure", () =>{
    expect(app.find(FrameComponent).length).toBe(10);
  }) 

});
