import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Bowling Game", () => {

  it("Should display 10 frames in a table structure", () =>{
    let app = shallow(<App />);

    expect(app.find('.scoreBoard .frame').length).toBe(10);
  }) 

});
