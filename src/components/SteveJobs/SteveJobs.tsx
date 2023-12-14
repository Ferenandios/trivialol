import { FC } from "react";
import styles from "./SteveJobs.module.css";

const SteveJobs: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.SteveJobs}>
        <div className={styles.ansoc}>
          <a
            href="https://www.youtube.com/watch?v=3nJs6GPmEZs"
            target="_blank"
            className={styles.button}
          >
            Поддержать продукт
          </a>
        </div>
      </div>
    </>
  );
};

export default SteveJobs;
