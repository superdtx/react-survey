/*
 * this file combine all reducers and return the rootReducer
 * and create.js
 * rootReducer will be passed in to produce the store
 */
import { combineReducers } from 'redux';
import foo from './foo';

const rootReducer = combineReducers({
  foo,
});

export default rootReducer;
