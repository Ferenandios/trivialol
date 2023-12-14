import { FC } from "react";
import { type TextProps } from "../../../types/types";
import styles from "./Text.module.css";

const Text: FC<TextProps> = ({ text }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

export default Text;
