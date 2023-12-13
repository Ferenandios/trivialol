import { FC } from "react";
import Title from "./Title/Title";
import Items from "./Items/Items";

const Plan: FC = (): JSX.Element => {
  return (
    <>
      <div className="pt-[240px]">
        <Title />
        <Items />
      </div>
    </>
  );
};

export default Plan;
