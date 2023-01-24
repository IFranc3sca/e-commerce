import styles from "./styles.module.scss";
import { TbRefresh } from "react-icons/tb";

const RefreshBtn = ({ getData }) => {
  return (
    <button className={styles.main} onClick={() => getData()}>
      <TbRefresh />
    </button>
  );
};

export default RefreshBtn;
