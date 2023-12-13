import { FC } from "react";
import Title from "./Title/Title";
import Items from "./Items/Items";
import Text from "./Text/Text";

const Plan: FC = (): JSX.Element => {
  return (
    <>
      <div className="pt-[240px] sm:pt-7 md:hidden">
        <Title />
        <Items />
      </div>
      <div className="hidden pt-[240px] sm:pt-7 md:block">
        <Title />
        <div className="lg:flex lg:justify-center">
          <div className="flex mt-8 md:border-b-[1px] md:border-b-white">
            <div className="pb-8 pr-6 border-r-[1px]">
              <Items />
            </div>
            <div>
              <Text />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
