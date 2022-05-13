import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../redux/actions";
import { getTodos } from "./selectors";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container  mt-4">
      <div className="row ms-4">
        <div className="col col-lg-9">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your todo"
          />
        </div>
        <div className="col col-lg-2 d-flex justify-content-start">
          <button
            className="btn btn-primary"
            onClick={() => {
              const isDuplicateText = todos.some(
                (todo) => todo.text === inputValue
              );
              if (inputValue !== "" && !isDuplicateText) {
                onCreatePressed(inputValue);
                setInputValue("");
              } else {
                window.alert(
                  "Task cannot be blank or duplicate , please enter a valid task name"
                );
              }
              // console.log(todos);
            }}
          >
            Create todo
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ todos: getTodos(state) });

const mapDispatchToprops = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToprops)(NewTodoForm);
