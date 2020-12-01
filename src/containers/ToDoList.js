import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({ todos }) => {
  let allToDos = todos.map(item => {
    return (
      <ToDo
        {...item}
        key={item.id}
      />
    )
  })

  const displayFiltered = bool => {
    if (!bool) {
      allToDos = allToDos
    } else {
      allToDos = allToDos.filter(todo => todo.completed === bool)
    }
  }

  return (
    <>
      <h2>To Do List</h2>
      <ul>
      {allToDos}
      </ul>    
      <section>
        <h3>Filter Your List</h3>
        <button
          onClick={() => displayFiltered()}
        >Show All Tasks</button>
        <button
          onClick={() => displayFiltered(false)}
        >Show Active</button>
        <button
        onClick={() => displayFiltered(true)}
        >Show Completed</button>
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

