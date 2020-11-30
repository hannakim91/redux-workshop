export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const markCompleted = id => ({
  type: 'MARK_COMPLETED',
  id
});

// `actions` are created by `action creator` function - pass in an argument (payload) that will change state in some way (in this case add a to-do item to array of to do's)