import { FC } from "react";
import Title from "./Title/Title";
import Items from "./Items/Items";
import styles from "./Team.module.css";

const Team: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.team}>
        <Title />
        <Items />
      </div>
    </>
  );
};

export default Team;
