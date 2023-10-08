import "./TodoItem.css";
import { motion } from "framer-motion";

const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    <motion.li
      initial={{ y: -10 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 9,
        duration: 0.6,
      }}
      className="item"
    >
      {props.text}
    </motion.li>
  );
};

export default TodoItem;
