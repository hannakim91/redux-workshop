import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
  console.log(todos);

  return (
    <>
      <ul>
      {todos && todos.map(item => <li>{item.todo}</li>)}
      </ul>
    </>
  )
};

const mapStateToProps = state => ({
  todos: state.todos
});
 export default connect(mapStateToProps)(ToDoList)

 // mapStateToPRops - selecting part of data from store (state.todos) that the connected component (ToDoList) needs
  // invoked every time the store is updated
  // refered to as 'state' instead of 'store' because you're looking for 'state value' NOT 'store instance'