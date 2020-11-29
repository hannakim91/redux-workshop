export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    default:
      return state;
  }
}

// reducers = functions that take 2 args
  // 1. an init/default value (like React component state)
  // 2. an action
// fired when app launches - gives default values to store (global state)
// ** all reducers fire when one is invoked -- why you need to give an initial value**
// formatted as a condition: switch statement - default = initial state, case for what return value to change in global state - can be one other condition/case or can be multiple 
// ADD_TODO == addIdea function in basic react app