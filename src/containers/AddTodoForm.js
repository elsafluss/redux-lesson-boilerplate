import React, { Component } from 'react'
import { addToDo } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  constructor() {
    super();
    this.state = { 
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  
  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  submitForm(e) {
    e.preventDefault()
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '' })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button onClick={this.submitForm}>Add Todo</button>
        </form>
      </section>
    )
  }
}

AddTodoForm.propTypes = {
  addToDo: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  addToDo: (text) => dispatch(addToDo(text)),
})

export default connect(null, mapDispatchToProps)(AddTodoForm)
