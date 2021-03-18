/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { toggleTodo } from "../actions/index"

const TodoCard = ({ id, todo, completed, toggleTodo }) => {
  return (
    <article>
      <h1
        onClick={() => toggleTodo(id)}
        className={completed ? "completed" : "not-completed"}
      >
        {todo}
      </h1>
    </article>
  )
}

TodoCard.propTypes = {
  todos: PropTypes.array,
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
})

export default connect(null, mapDispatchToProps)(TodoCard)
