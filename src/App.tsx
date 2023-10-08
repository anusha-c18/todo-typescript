import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <NewTodo />
      <Todos />
    </RecoilRoot>
  );
}

export default App;
