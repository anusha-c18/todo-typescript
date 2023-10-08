import useOperations from "../hooks/useOperations";
import "./TodoItem.css";
import { motion } from "framer-motion";

const TodoItem: React.FC<{
  id: string;
  text: string;
}> = ({ text, id }) => {
  const { removeTodoHandler } = useOperations();
  return (
    <motion.li
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      className="item"
      onClick={() => removeTodoHandler(id)}
    >
      {text}
    </motion.li>
  );
};

export default TodoItem;
