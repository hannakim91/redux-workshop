import React from 'react';
import { connect } from 'react-redux';

const ListFilters = ({ todos }) => {
  return (
    <section>
      <h3>Filter Your List</h3>
      <button>Show All Tasks</button>
      <button>Show Active</button>
      <button>Show Completed</button>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ListFilters)