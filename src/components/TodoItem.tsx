import "./TodoItem.css";
import { motion } from "framer-motion";

const TodoItem: React.FC<{
  text: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <motion.li
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      className="item"
      onClick={props.removeTodo}
    >
      {props.text}
    </motion.li>
  );
};

export default TodoItem;
