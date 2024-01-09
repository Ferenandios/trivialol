import { FC } from "react";
import styles from "./SteveJobs.module.css";

const SteveJobs: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.SteveJobs}>
        <div className={styles.ansoc}>
          <button
            onClick={() => document.write('Нужен только результат!')}
            className={styles.button}
          >
            Поддержать продукт
          </button>
        </div>
      </div>
    </>
  );
};

export default SteveJobs;
