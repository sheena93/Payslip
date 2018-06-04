import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('renders App components with  Textfields components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<TextField/>)).to.have.length(6);
  });

  it('renders an name input field', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#name')).to.have.length(1);
  });

  it('renders Button to generate pay slip', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Button/>)).to.equal(true);
  });
  it('renders Input List', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<List/>)).to.equal(true);
  });
});
