import { Navigation } from "./components/Navigation";
import styles from "./styles.module.scss";
import { IoSettingsSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <Navigation />
      </div>
      <div className={styles.icons}>
        <IoSettingsSharp />
      </div>
    </div>
  );
};
