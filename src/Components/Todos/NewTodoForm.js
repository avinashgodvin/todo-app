import React, { useState } from "react";

const NewTodoForm = () => {
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
          <button className="btn btn-primary">Create todo</button>
        </div>
      </div>
    </div>
  );
};

export default NewTodoForm;
