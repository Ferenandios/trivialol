import { FC } from "react";
import Item from "./Item/Item";
import { type Person } from "../../../types/types";

const Items: FC = (): JSX.Element => {
  const items: Item[] = [
    {
      avatar: "/src/assets/MADE.jpg",
      name: "Николай Князев",
      about: "Основатель, Борьба с запоем",
    },
    {
      avatar: "/src/assets/BY.jpg",
      name: "Михаил Грищенко",
      about: "Сооснователь, Лежание на диване",
    },
    {
      avatar: "/src/assets/KNYAZEV.jpg",
      name: "Алексей Кириченко",
      about: "Сооснователь, Просмотр аниме",
    },
  ];
  return (
    <>
      <div className="mt-8">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Items;
