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
      <div className="px-4">
        <h1
        // className={
        // done ?
        // "font-semibold line-through" :
        // "font-semibold"
        // }
        >
          {props.name}
        </h1>
      </div>
      <div className={styles.iconContainer}>
        <BsCheckSquare
          onClick={() => setDone(!done)}
          className={styles.checkIcon}
          size={20}
        />
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
