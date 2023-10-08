import { todoState } from "../atoms/todoAtom";
import { useSetRecoilState } from "recoil";

const useOperations = () => {
  const setTodos = useSetRecoilState(todoState);
  const addTodoHandler = (todoText: string) => {
    setTodos((prev) => ({
      todos: [...prev.todos, { id: new Date().toISOString(), name: todoText }],
    }));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => ({
      ...prev,
      todos: prev.todos.filter((todo) => todo.id != todoId),
    }));
  };

  return { addTodoHandler, removeTodoHandler };
};
export default useOperations;
