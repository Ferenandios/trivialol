import { FC } from "react";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";

const Banner: FC = (): JSX.Element => {
  return (
    <>
      <div className="h-[250px]">
        <img
          className="absolute -z-50 h-[250px] object-cover"
          src="/src/assets/banner.png"
          alt="Background"
        />
        <div className="container">
          <div className="flex flex-col text-center items-center pt-8">
            <Title />
            <Subtitle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
