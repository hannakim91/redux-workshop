import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

const ListFilter = () => {
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

})

export default connect(null, mapDispatchToProps)(ListFilter);