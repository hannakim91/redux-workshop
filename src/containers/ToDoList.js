import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({todos}) => {
  const displayToDos = todos.map(todo => {
    return (
      <ToDo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <>
      <ul>
      {/* {todos && todos.map(item => <li>{item.todo}</li>)} */}
      {displayToDos}
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