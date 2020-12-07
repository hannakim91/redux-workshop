import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({ todos }) => {

  const [filter, setFilter] = useState('all')

  let filteredData = []
  if (filter === 'all') {
    filteredData = todos
  } else if (filter === 'active') {
    filteredData = todos.filter(todo => todo.completed === false)
  } else if (filter === 'completed') {
    filteredData = todos.filter(todo => todo.completed === true)
  }

  // might be able to refactor this - run through a function instead? 
  // take filter, take data -> filter data and display

  let allToDos = filteredData.map(item => {
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
      {allToDos}
      </ul>    
      <section>
        <h3>Filter Your List</h3>
        <button
          onClick={() => setFilter('all')}
          //need anon function to tell it to only fire when button clicks -- without it, it fires every time it renders, not just when it is clicked
        >Show All Tasks</button>
        <button
          onClick={() => setFilter('active')}
        >Show Active</button>
        <button
        onClick={() => setFilter('completed')}
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


//react only re-renders automatically if a prop is altered
  // ie, resetting variable inside component won't trigger a re-render (allToDos)
  // option 1: useEffect could re-render but back to initial allToDo not the buttonclick function

// data flows through filter state same everytime (all/complete/incomlete)
// 1. comp renders
// 2. take todos from store and apply default (no filter/all) - render allToDos
// if filter updated via button click
  // update filter -> triggers re-render

