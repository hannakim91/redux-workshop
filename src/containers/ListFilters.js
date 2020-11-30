import React from 'react';
import { connect } from 'react-redux';
import { filterTasks } from '../actions';

const ListFilter = ({ filterTasks }) => {
  return (
    <>
      <h3>Filter Your List</h3>
      <button>Show All Tasks</button>
      <button>Show Active</button>
      <button>Show Completed</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  filterTasks: bool => dispatch( filterTasks(bool) )
})

export default connect(null, mapDispatchToProps)(ListFilter);