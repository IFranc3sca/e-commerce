import styles from "./styles.module.scss";
const LiComponent = ({ label, icon, setRoute, routeUrl }) => {
  return (
    <li onClick={() => setRoute(routeUrl)} className={styles.main}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiComponent;
