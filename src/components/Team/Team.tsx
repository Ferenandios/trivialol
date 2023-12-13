import { FC } from "react";
import Title from "./Title/Title";
import Items from "./Items/Items";

const Team: FC = (): JSX.Element => {
  return (
    <>
      <div className="mt-[160px] sm:mt-[28px] md:mt-8">
        <Title />
        <Items />
      </div>
    </>
  );
};

export default Team;
