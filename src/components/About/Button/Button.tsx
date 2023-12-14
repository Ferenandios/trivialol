import { FC } from "react";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.button}>
          <a
            className={styles.link}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            Смотреть описание на YouTube
          </a>
        </div>
      </div>
    </>
  );
};

export default Button;
