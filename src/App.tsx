import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Apples"), new Todo("Oranges")];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
