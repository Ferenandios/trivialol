import { FC } from "react";
import { type LinkProps } from "../../../../types/types";
import styles from "./Link.module.css";
import { useClipboard } from "use-clipboard-copy";
import { useAppDispatch } from "../../../../hooks/hooks";
import { displayCopyWindow } from "../../../../features/person.slice";

const Link: FC<LinkProps> = ({ link, id }): JSX.Element => {
  const clipboard = useClipboard();
  const dispatch = useAppDispatch();
  return (
    <>
      {id !== 2 ? (
        <button
          onClick={() => {
            clipboard.copy(link.link);
            dispatch(displayCopyWindow());
          }}
          className={styles.link}
        >
          {link.social}
        </button>
      ) : (
        <a
          href="https://habr.com/ru/users/Ferenando"
          target="_blank"
          className={styles.link}
        >
          {link.social}
        </a>
      )}
    </>
  );
};

export default Link;
