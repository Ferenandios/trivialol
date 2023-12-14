import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import styles from "./Text.module.css";

const Text: FC = (): JSX.Element => {
  const { persons } = useAppSelector((state) => state.person);
  return (
    <>
      <div className={styles.ansoc}>
        {persons.map(
          (person, index) =>
            person.isActive && ( // Only one can be active
              <React.Fragment key={index}>
                <p className={styles.text}>
                  {person.text}
                </p>
              </React.Fragment>
            )
        )}
      </div>
    </>
  );
};

export default Text;
