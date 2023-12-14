import { FC } from "react";
import styles from "./Title.module.css";

const Title: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Цели на будущее</h1>
      </div>
    </>
  );
};

export default Title;
