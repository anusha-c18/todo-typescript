import { useRef } from "react";
import "./NewTodo.css";
import toast, { Toaster } from "react-hot-toast";
import useOperations from "../hooks/useOperations";
const notify = (text: string) => toast(text);

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodoHandler } = useOperations();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    //input validation
    if (enteredText.trim().length === 0) {
      notify("No text entered!");
      return;
    } else {
      addTodoHandler(enteredText);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
