import { FC } from "react";
import Item from "./Item/Item";
import { useAppSelector } from "../../../hooks/hooks";
import { type IPlan } from "../../../types/types";

const Items: FC = (): JSX.Element => {
  const state = useAppSelector((state) => state.person);
  return (
    <>
      <div className="mt-8">
        {state.map((item: IPlan, index: number) => (
          <Item key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Items;
