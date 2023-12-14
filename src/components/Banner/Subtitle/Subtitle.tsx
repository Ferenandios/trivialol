import { FC } from "react";
import styles from "./Subtitle.module.css";

const Subtitle: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <h3 className={styles.subtitle}>
          Создание браузерной онлайн-игры в группе смелых разработчиков
        </h3>
      </div>
    </>
  );
};

export default Subtitle;
