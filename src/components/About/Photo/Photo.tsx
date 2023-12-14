import { FC } from "react";
import styles from "./Photo.module.css";

const Photo: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <img
          className={styles.photo}
          src="src/assets/kawaiha.png"
          alt="Kawaiha"
        />
      </div>
    </>
  );
};

export default Photo;
