import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../../store/features/todo/todoSlice";

import styles from "./UpdateTodoForm.module.scss";

const UpdateTodoForm = () => {
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate);
  const [update, setUpdate] = useState(todoToUpdate.name);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Enter a todo");
      setUpdate("");
      return;
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,
          name: update,
        })
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.UpdateTodoForm}>
        <input
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          type="text"
          className={styles.input}
          placeholder="Update todo"
        />
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodoForm;
