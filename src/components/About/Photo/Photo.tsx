import { FC } from "react";
import styles from "./Photo.module.css";
import photo from "/src/assets/kawaiha.png";

const Photo: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <img className={styles.photo} src={photo} alt="Kawaiha" />
      </div>
    </>
  );
};

export default Photo;
