export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    case 'MARK_COMPLETED':
      return state.map(todo => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    // case 'SHOW_FILTERED':
    //   return state.filter(todo => todo.completed === action.isCompleted);
    // case 'SHOW_ALL':
    //   return state;
    default:
      return state;
  }
}

// reducers make up the store (global state) - can use `combineReducers` (in reducers/index.js to have multiple pieces of state in store)
// reducers = functions that take 2 args
  // 1. an init/default value (like React component state)
  // 2. an action
// fired when app launches - gives default values to store (global state)
// ** all reducers fire when one is invoked -- why you need to give an initial value**
// formatted as a condition: switch statement - default = initial state, case for what return value to change in global state - can be one other condition/case or can be multiple 

// react + redux app vs basic react app
// ADD_TODO == addIdea function 
// global state that can be accessed by App and all child components (when wrapped in Provider class) vs having to pass down props/methods to child, then grandchildren and so forth
// both global state and class/functional component state need a value to initialize with - with redux, this is defined in a reducer's default value of switch statement