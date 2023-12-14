import { FC } from "react";
import styles from './Copyright.module.css'

const Copyright: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <h6>«Невероятно простой»</h6>
        <h6 className={styles.copyright}>&copy; 2023, Рофлан </h6>
      </div>
    </>
  );
};

export default Copyright;
