import { FC } from "react";
import styles from "./Copyright.module.css";

const Copyright: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <h6>«Невероятно простой»</h6>
        <h6 className={styles.copyright}>
          &copy; {new Date().getFullYear()},{" "}
          <a className="underline" href="https://github.com/Ferenandios">
            Князев Николай
          </a>{" "}
        </h6>
      </div>
    </>
  );
};

export default Copyright;
