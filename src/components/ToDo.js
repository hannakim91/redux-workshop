import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

const ToDo = ( { id, todo, completed, markCompleted }) => {
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={markCompleted(id)}
    >
      {todo}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  markCompleted: id => dispatch ( markCompleted(id) )
})
export default connect(null, mapDispatchToProps)(ToDo);

  // to add completed functionality - need to know completed status of an item that is clicked on