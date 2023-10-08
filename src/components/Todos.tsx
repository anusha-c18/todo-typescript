import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import "./Todos.css";
import { motion, AnimatePresence } from "framer-motion";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <AnimatePresence>
      <ul className="todos">
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default Todos;
