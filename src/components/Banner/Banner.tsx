import { FC } from "react";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";
import styles from "./Banner.module.css";

const Banner: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.banner}>
        <img
          className={styles.background}
          src="/src/assets/banner.png"
          alt="Background"
        />
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
