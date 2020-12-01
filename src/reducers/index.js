import { combineReducers } from 'redux';
import { todos } from './todos';
import { displayList } from './displayList';

const rootReducer = combineReducers({
  todos,
  displayList,
});

export default rootReducer;

// naming convention = rootReducer
// function from redux library that creates one object from all reducers used in the app - takes in an object as an argument
// properties of object return = each reducer