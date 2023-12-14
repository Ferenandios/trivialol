import { FC } from "react";
import { type ItemProps } from "../../../../types/types";
import styles from "./Item.module.css";

const Item: FC<ItemProps> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.item}>
          <div>
            <img className={styles.avatar} src={item.avatar} alt="Person" />
          </div>
          <div className={styles.text}>
            <span className={styles.name}>{item.name}</span>
            <p className={styles.about}>{item.about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
