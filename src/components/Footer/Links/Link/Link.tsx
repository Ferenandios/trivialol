import { FC } from "react";
import { type LinkProps } from "../../../../types/types";
import styles from "./Link.module.css";

const Link: FC<LinkProps> = ({ link }): JSX.Element => {
  return (
    <>
      <a className={styles.link} target="_blank" href={link.link}>
        {link.social}
      </a>
    </>
  );
};

export default Link;
