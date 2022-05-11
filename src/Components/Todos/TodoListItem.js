import React from "react";

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="container">
      <div className=" container border  m-3 p-2 ">
        <h3 className="card-header">{todo.text}</h3>
        <div className="container d-flex justify-content-end card-text">
          <button className="btn  btn-outline-success p-2 m-3">
            Mark as completed
          </button>
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
