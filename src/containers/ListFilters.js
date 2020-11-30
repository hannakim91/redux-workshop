import React from 'react';
import { connect } from 'react-redux';

const ListFilter = ({ todos }) => {
  return (
    <>
      <h3>Filter Your List</h3>
      <button>Show All Tasks</button>
      <button>Show Active</button>
      <button>Show Completed</button>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ListFilters)