import "./App.css";
import NewTodoForm from "./Components/Todos/NewTodoForm";
import TodoList from "./Components/Todos/TodoList";

function App() {
  let todos = [
    {
      text: "work hard ",
    },
    {
      text : "water the plants"
    }
  ];
  return (
    <div className="App">
      <NewTodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
