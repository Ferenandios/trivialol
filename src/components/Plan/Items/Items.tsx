import { FC } from "react";
import Item from "./Item/Item";
import { useAppSelector } from "../../../hooks/hooks";
import { type IPlan } from "../../../types/types";

const Items: FC = (): JSX.Element => {
  const { persons } = useAppSelector((state) => state.person);
  return (
    <>
      <div className="mt-8 sm:mt-7 sm:flex sm:flex-col sm:items-center md:mt-0 md:items-start">
        {persons.map((item: IPlan, index: number) => (
          <Item key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Items;
