import React from "react";
import Todo from "./TodoItem";
import "./Todos.css";
import { AnimatePresence } from "framer-motion";
import { todoState } from "../atoms/todoAtom";
import { useRecoilValue } from "recoil";

const Todos: React.FC = () => {
  const todoValues = useRecoilValue(todoState);
  return (
    <ul className="todos">
      <AnimatePresence>
        {todoValues.todos.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Todos;
