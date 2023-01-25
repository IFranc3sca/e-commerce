import { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [classes, setClasses] = useState([styles.test1, styles.test2]);

  const addOtherClass = () => {
    setClasses([...classes, styles.test3]);
  };

  return (
    <div className={styles.main}>
      <div onClick={() => addOtherClass()} className={styles.logo}>
        <h1 className={classes.join(" ")}>E-Commerce</h1>
      </div>
    </div>
  );
};

export default Header;
