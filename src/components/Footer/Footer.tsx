import { FC } from "react";
import Links from "./Links/Links";
import Copyright from "./Copyright/Copyright";
import styles from './Footer.module.css'

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Links />
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
