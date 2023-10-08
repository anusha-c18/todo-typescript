import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import "./Todos.css";
import { AnimatePresence } from "framer-motion";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className="todos">
      <AnimatePresence>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            removeTodo={props.removeTodo.bind(null, item.id)}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Todos;
