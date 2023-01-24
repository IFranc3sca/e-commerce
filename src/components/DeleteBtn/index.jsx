import styles from "./styles.module.scss";
import { TbTrash } from "react-icons/tb";

const DeleteBtn = () => {
  return (
    <button className={styles.main}>
      <TbTrash />
    </button>
  );
};

export default DeleteBtn;
