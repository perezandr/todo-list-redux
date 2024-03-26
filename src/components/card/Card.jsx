import AddTodoForm from "../addTodoForm/AddTodoForm.jsx";
import UpdateTodoForm from "../updateTodoForm/UpdateTodoForm.jsx";
import SingleTodoCard from "../singleTodoCard/SingleTodoCard.jsx";

import { useSelector, useDispatch } from "react-redux";
import { todosCleared } from "../../store/features/todo/todoSlice.js";
import styles from "./Card.module.scss";

const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const toggleForm = useSelector((state) => state.todos.toggleForm);
  const dispatch = useDispatch();
  return (
    <div className={styles.Card}>
      <div className={styles.todoContainer}>
        <h1 className={styles.title}>My todo list</h1>
        <div className={styles.formContainer}>
          {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
        </div>

        <ul className={styles.todoList}>
          {myTodos.map((todo) => (
            <li className={styles.todo} key={todo.id}>
              <SingleTodoCard id={todo.id} name={todo.name} />
            </li>
          ))}
        </ul>
        <button
          onClick={() => dispatch(todosCleared())}
          className={styles.clearButton}
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default Card;
