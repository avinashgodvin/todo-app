import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted } from "../../redux/actions";
import { getTodos, getCompletedTodos, getIncompleteTodos } from "./selectors";
import styled from "styled-components";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  completedTodos,
  incompleteTodos,
}) => {
  return (
    <div className="container">
      
      <div className=" container  ">
        {incompleteTodos.length === 0 ? null : (
          <div className="container p-2">
            <h3 className=" section-header-incomplete-todos  ">Incomplete todos : </h3>
          </div>
        )}

        {incompleteTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))}
      </div>
      <div className=" container">
        {completedTodos.length === 0 ? null : (
          <div className="container p-2">
            <h3 className="section-header-completed-todos ">Completed todos : </h3>
          </div>
        )}

        {completedTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
