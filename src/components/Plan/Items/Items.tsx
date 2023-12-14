import { FC } from "react";
import Item from "./Item/Item";
import { useAppSelector } from "../../../hooks/hooks";
import { type IPlan } from "../../../types/types";
import styles from "./Items.module.css";

const Items: FC = (): JSX.Element => {
  const { persons } = useAppSelector((state) => state.person);
  return (
    <>
      <div className={styles.ansoc}>
        {persons.map((item: IPlan, index: number) => (
          <Item key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Items;
