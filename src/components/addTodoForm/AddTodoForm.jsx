import { useState } from "react";
import { todoAdded } from "../../store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import styles from "./AddTodoForm.module.scss";

const AddTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: input,
        })
      );
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.AddTodoForm}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className={styles.input}
          placeholder="Add todo"
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
