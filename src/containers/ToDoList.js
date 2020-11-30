import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({ todos }) => {
  const displayToDos = todos.map(item => {
    return (
      <ToDo
        {...item}
        key={item.id}
      />
    )
  })

  return (
    <>
      <h2>To Do List</h2>
      <ul>
      {displayToDos}
      </ul>    
      <section>
        <h3>Filter Your List</h3>
        <button>Show All Tasks</button>
        <button>Show Active</button>
        <button>Show Completed</button>
      </section>
    </>
  )
};

const mapStateToProps = state => ({
  todos: state.todos
});
 export default connect(mapStateToProps)(ToDoList)

 // mapStateToProps - selecting part of data from store (state.todos) that the connected component (ToDoList) needs
  // invoked every time the store is updated
  // refered to as 'state' instead of 'store' because you're looking for 'state value' NOT 'store instance'

