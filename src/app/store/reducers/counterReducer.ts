import { Reducer, Action } from 'redux';
import { IAppState } from '../index';
import {
CounterAction
} from '../actions/index';

let initialState: IAppState = { counter : {counter: 0 }};

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<IAppState> =
  (state: IAppState = initialState, action: { type: string, payload?: any }): IAppState => {
    switch (action.type) {
    case CounterAction.INCREMENTSUCCESS:
      return Object.assign({}, state, { counter: { counter : action.payload }});
    case CounterAction.DECREMENTSUCCESS:
      return Object.assign({}, state, { counter: { counter: action.payload }});
    default:
      return state;
    }
  };