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
          <div className="absolute -z-40 w-full h-full bg-[#111] bg-opacity-70 bg-gradient-to-b from-transparent to-[#111] to-[100%]"></div>
          <img
            className="absolute -z-50 w-full h-full object-cover grayscale left-0"
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
