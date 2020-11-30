import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

const ToDo = ( { id, todo, completed }) => {
  const toggleComplete = () => {
    markCompleted(id)
    // change complete from false to true in global state/store
    // mark UI to crossed out
  }
  return (
    <li>
      {todo}:{`${completed}`}
      <button onClick={toggleComplete()}>Mark Complete</button>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  markCompleted: item => dispatch ( markCompleted(item) )
})
export default connect(null, mapDispatchToProps)(ToDo);

  // to add completed functionality - need to know completed status of an item that is clicked on