import { useState } from "react";
import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import {
  todoDeleted,
  toggleInputForm,
} from "../../store/features/todo/todoSlice";
import { useDispatch } from "react-redux";
import styles from "./SingleTodoCard.module.scss";

const SingleTodoCard = (props) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.todoCard}>
      <div className={styles.titleContainer}>
        <button
          onClick={() => setDone(!done)}
          className={styles.checkButton}
          size={20}
        />
        <h1 className={done ? styles.titleDone : styles.titleNotDone}>
          {props.name}
        </h1>
      </div>
      <div className={styles.iconContainer}>
        <FaEdit
          onClick={() =>
            dispatch(
              toggleInputForm({
                id: props.id,
                name: props.name,
              })
            )
          }
          className={styles.editIcon}
          size={20}
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))}
          className={styles.trashIcon}
          size={20}
        />
      </div>
    </div>
  );
};

export default SingleTodoCard;
