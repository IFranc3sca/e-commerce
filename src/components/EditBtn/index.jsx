import styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";

const EditBtn = ({ metodo }) => {
  return (
    <button onClick={() => metodo()} className={styles.main}>
      <TbEdit />
    </button>
  );
};

export default EditBtn;
