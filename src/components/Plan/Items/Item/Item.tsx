import { FC } from "react";
import { type PlanProps } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/hooks";
import { changeActive } from "../../../../features/person.slice";
import minus from "/src/assets/minus.svg";
import plus from "/src/assets/plus.svg";
import styles from "./Item.module.css";

const Item: FC<PlanProps> = ({ item, index }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={styles.item}>
        <button
          className={item.isActive ? styles.buttonActive : styles.button}
          onClick={() => dispatch(changeActive(index))}
        >
          <h4 className={styles.title}>{item.title}</h4>
          <img
            src={item.isActive ? minus : plus}
            alt={item.isActive ? "Minus" : "Plus"}
          />
        </button>
        {item.isActive && (
          <>
            <div className={styles.ansocText}>
              <p className={styles.text}>{item.text}</p>
            </div>
          </>
        )}
      </div>

      <div className={styles.item2}>
        <button
          className={item.isActive ? styles.button2Active : styles.button2}
          onClick={() => dispatch(changeActive(index))}
        >
          <h4 className={styles.title}>{item.title}</h4>
        </button>
      </div>
    </>
  );
};

export default Item;
