import React from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import ToDoCard from "../components/ToDo"
import { showAll, showActive, showCompleted } from "../actions/index"

const ToDoList = ({
  todos,
  completed,
  active,
  clicked,
  showAll,
  showActive,
  showCompleted,
}) => {
  const todoDisplay = () => {
    if (clicked === "active") {
      return active.map((todo) => {
        return (
          <ToDoCard
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            completed={todo.completed}
          />
        )
      })
    } else if (clicked === "completed") {
      return completed.map((todo) => {
        return (
          <ToDoCard
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            completed={todo.completed}
          />
        )
      })
    } else if (clicked === "all") {
      return todos.map((todo) => {
        return (
          <ToDoCard
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            completed={todo.completed}
          />
        )
      })
    }
  }

  return (
    <section>
      <button onClick={() => showAll()}>All</button>
      <button onClick={() => showActive()}>Active</button>
      <button onClick={() => showCompleted()}>Done</button>
      <ul>{todoDisplay()}</ul>
    </section>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  completed: PropTypes.array,
  active: PropTypes.array,
  clicked: PropTypes.string,
  showAll: PropTypes.func,
  showActive: PropTypes.func,
  showCompleted: PropTypes.func
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  completed: state.todos.completed,
  active: state.todos.active,
  clicked: state.todos.clicked,
})

const mapDispatchToProps = (dispatch) => ({
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
