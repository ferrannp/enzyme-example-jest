jest.unmock('../MyComponent');
jest.unmock('../Foo');

import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from '../MyComponent';
import Foo from '../Foo';

describe('<MyComponent />', () => {
  
  it('renders a header', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.contains(<h1>My Component</h1>)).toBe(true);
  });

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo).length).toBe(3);
  });
  
  it('expects to change the status when clicking the button', () => {
    const wrapper = shallow(<MyComponent />);
    
    expect(wrapper.state().status).toBe(false);
    expect(wrapper.contains(<p>Status is {'Off'}</p>)).toBe(true);
  
    wrapper.find('button').simulate('click');
    
    expect(wrapper.state().status).toBe(true);
    expect(wrapper.contains(<p>Status is {'On'}</p>)).toBe(true);
  });
  
});