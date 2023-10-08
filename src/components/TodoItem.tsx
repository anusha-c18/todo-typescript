import React from "react";
import useOperations from "../hooks/useOperations";
import "./TodoItem.css";
import { motion } from "framer-motion";
import { TodoItem } from "../atoms/todoAtom";

type TodoItemProps = {
  todo: TodoItem;
};

const Todo: React.FC<TodoItemProps> = ({ todo }) => {
  const { removeTodoHandler } = useOperations();
  return (
    <motion.li
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      className="item"
      onClick={() => removeTodoHandler(todo.id)}
    >
      {todo.name}
    </motion.li>
  );
};
export default Todo;
