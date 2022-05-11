import "./App.css";
import NewTodoForm from "./Components/Todos/NewTodoForm";
import TodoList from "./Components/Todos/TodoList";

function App() {

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
