import styles from "./styles.module.scss";
import { TbTrash } from "react-icons/tb";
import { DELETE } from "../../libs/HTTP";

const DeleteBtn = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("categories", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };
  return (
    <button onClick={() => deleteElement()} className={styles.main}>
      <TbTrash />
    </button>
  );
};

export default DeleteBtn;
