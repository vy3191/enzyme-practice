import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter});

/** 
 Factory function to create a ShallowWrapper for the App component.
 * @function setUP 
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns  {ShallowWrapper}
 **/
const setUp = (props={}, state=null) => {
  const wrapper =  shallow(<App {...props}/>);
  if(state) wrapper.setState(state);
  return wrapper;
  
}
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 **/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
test('renders <App /> without errors', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1);
  });
  
  test('renders increment button', () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1);
    
  });

  test('renders decrement button', () => {
     const wrapper = setUp();
     const decrementButton = findByTestAttr(wrapper, 'decrement-button');
     expect(decrementButton.length).toBe(1);
  });
  
  test('renders counter display', () => {
    const wrapper = setUp();
    const counter = findByTestAttr(wrapper, 'counter-display')
    expect(counter.length).toBe(1);
    
  });
  
  test('counter starts at 0', () => {
    const wrapper = setUp();
    const counterWrapper = wrapper.state().counter;
    expect(counterWrapper).toBe(0);
    
  });

  test('clicking decrement-button decrements counter display', () => {
      const counter = 10;
      const wrapper = setUp(null, {counter});
      const decrementButton = findByTestAttr(wrapper, 'decrement-button');
      decrementButton.simulate('click');
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(counter-1);

  });

    test('if counter value is 0 then clicking decrement button throw error', async () =>{
        const counter = 0;
        const wrapper = await setUp(null, {counter});
        const dButton = await findByTestAttr(wrapper, 'decrement-button');
        dButton.simulate('click');
        const warning = await findByTestAttr(wrapper, 'warning-display');
        console.log(warning.debug());
        expect(warning.text()).toContain('cannot go below zero');

    })
  
  test('clicking increment-button increments counter display', () => {
    const counter = 7;
    const wrapper = setUp(null, {counter});
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter+1);
});