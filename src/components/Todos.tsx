import React from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
import { AnimatePresence } from "framer-motion";
import { todoState } from "../atoms/todoAtom";
import { useRecoilValue } from "recoil";

const Todos: React.FC = () => {
  // const [getter, setter] = useState()
  /*
    1. useRecoilState()
      - const [getter, setter] = useRecoilState(todoState)

    2. useRecoilValue()
      const getter = useRecoilValue(todoState)

    3. useSetRecoilState
    const setter = useRecoilStateValue(todoState)
  */
  const todoValues = useRecoilValue(todoState);
  return (
    <ul className="todos">
      <AnimatePresence>
        {todoValues.todos.map((item) => (
          <TodoItem key={item.id} text={item.name} id={item.id} />
        ))}
      </AnimatePresence>
      {}
    </ul>
  );
};

export default Todos;
