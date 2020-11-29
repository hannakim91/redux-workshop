import { combineReducers } from 'redux';
import { todos } from './todos';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

// function from redux library that creates one object from all reducers used in the app - takes in an object as an argument