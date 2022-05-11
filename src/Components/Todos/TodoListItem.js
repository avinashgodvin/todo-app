import React from "react";
import "./Todo.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="container">
      <div className=" container border  m-3 p-2 ">
        <h3
          className={
            todo.isCompleted ? "card-header mark-as-completed" : "card-header"
          }
        >
          {todo.text}
        </h3>
        <div className="container d-flex justify-content-end card-text">
          {todo.isCompleted ? null : (
            <button
              className="btn  btn-outline-success p-2 m-3"
              onClick={() => {
                onCompletedPressed(todo.text);
              }}
            >
              Mark as completed
            </button>
          )}

          <button
            className="btn btn-outline-danger p-2 m-3"
            onClick={() => {
              onRemovePressed(todo.text);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
