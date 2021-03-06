/*
  Actions Unit Tests: 
  
  When testing actions, we are testing only that 
  when the action creators (sync and async)
  are dispatched, that the correct action object -- 
  ( type: TYPE, payload: {} ) is returned
*/

import * as actions from '../store/actions.js';

// Test that when our synchronous action creators are called, that the right action type is created
describe('Counter Synchronous actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: 'INCREMENT',
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it('should create an action to decrement the counter', () => {
    const expectedAction = {
      type: 'DECREMENT',
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });

  it('should create an action to reset the counter', () => {
    const expectedAction = {
      type: 'RESET',
    };
    expect(actions.resetCounter()).toEqual(expectedAction);
  });
});
