import { atom } from "recoil";

export type TodoItem = {
  name: string;
  id: string;
};

interface TodoItems {
  todos: Array<TodoItem>;
}

const defaultTodoItems: TodoItems = {
  todos: [],
};

export const todoState = atom<TodoItems>({
  default: defaultTodoItems,
  key: "todos",
});
