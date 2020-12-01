export const displayList = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_FILTERED':
      return state.filter(todo => todo.completed === action.isCompleted);
    default:
      return state;
  }
}