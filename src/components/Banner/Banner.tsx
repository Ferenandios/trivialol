import { FC } from "react";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";
import styles from "./Banner.module.css";
import background from "/src/assets/banner.webp";

const Banner: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.background}>
          <div className={styles.ansoc}></div>
          <img
            className={styles.img}
            src={background}
            alt="Background"
          />
        </div>
        <div className="container">
          <div className={styles.inner}>
            <Title />
            <Subtitle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
