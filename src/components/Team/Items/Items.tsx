import { FC } from "react";
import Item from "./Item/Item";
import { type Person } from "../../../types/types";
import styles from "./Items.module.css";
import first from "/src/assets/MADE.jpg";
import second from "/src/assets/BY.jpg";
import third from "/src/assets/KNYAZEV.jpg";

const Items: FC = (): JSX.Element => {
  const items: Person[] = [
    {
      avatar: first,
      name: "Николай Князев",
      about: "Основатель, Борьба с запоем",
    },
    {
      avatar: second,
      name: "Михаил Грищенко",
      about: "Сооснователь, Лежание на диване",
    },
    {
      avatar: third,
      name: "Алексей Кириченко",
      about: "Сооснователь, Просмотр аниме",
    },
  ];
  return (
    <>
      <div className={styles.items}>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Items;
