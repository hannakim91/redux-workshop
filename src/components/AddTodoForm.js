import React, { Component } from 'react';
import { addToDo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch( addToDo(text) )
})
export default connect(null, mapDispatchToProps)(AddTodoForm);

// React Redux components do not access store directly - indirectly through `connect`
  // component can receive props.dispatch to dispatch action
  // connect can accept arg called mapDispatchToProps to create functions that dispatch when called 
    // passes functions as prop to component
    // null as first arg b/c form doesn't need access to store - action adds todo to store
    // mapDispatchToProps function - created so that it returns an object (dispatch actions to the store)
  // dispatch function from Redux store: sends action to reducers -> create state changes (global store)
    // call store.dispatch to dispatch option and trigger state change
  // passes methods down to component as props (in submitForm)


// separating component types: reusability/separation of concerns
  // container component
    // manage data (state) - aware of redux/subscribe redux state/dispatch to redux actions/functional aspect of app
    // often pass data to child components
    // syntax: wrap component with `connect`
    // organization purposes: have a containers directory

  // presentational component
    // deal with how things look - read data from props, invoke callbacks on props, unaware of redux
    // often stateless
