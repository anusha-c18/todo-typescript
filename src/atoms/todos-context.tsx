// import React, { useState } from "react";
// import Todo from "../models/todo";

// type TodosContextObj = {
//   items: Todo[];
//   addTodo: (text: string) => void;
//   removeTodo: (id: string) => void;
// };

// export const TodosContext = React.createContext<TodosContextObj>({
//   items: [],
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

// const TodosContextProvider: React.FC = (props) => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((state) => {
//       return [...state, newTodo];
//     });
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== todoId);
//     });
//   };

//   return (
//     <TodosContext.Provider value={{}}>
//       {props.children}
//     </TodosContext.Provider>
//   );
// };

// export default TodosContextProvider;

// import React, { useState } from "react";
// import Todo from "../models/todo";
// import { contextProps } from "../types";

// interface todosContextObj {
//   children: React.ReactNode;
// }

// const TodosContext = React.createContext<contextProps>({
//   todos: Array<Todo>,
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

// const todosContext: React.FC<todosContextObj> = ({ children }) => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((state) => {
//       return [...state, newTodo];
//     });
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== todoId);
//     });
//   };

//   return (
//     <TodosContext.Provider value={{ todos, addTodoHandler, removeTodoHandler }}>
//       {children}
//     </TodosContext.Provider>
//   );
// };

// export default todosContext;

// recoil for global state management
// hooks for exporting essential functions

// redux, zustand, recoil, reactContext, prop-chaining
