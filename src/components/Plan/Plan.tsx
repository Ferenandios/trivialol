import { FC } from "react";
import Title from "./Title/Title";
import Items from "./Items/Items";
import Text from "./Text/Text";
import styles from "./Plan.module.css";

const Plan: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.plan}>
        <Title />
        <Items />
      </div>

      <div className={styles.plan2}>
        <Title />
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.items}>
              <Items />
            </div>
            <div>
              <Text />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
