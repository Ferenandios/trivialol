import { FC } from "react";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";

const Banner: FC = (): JSX.Element => {
  return (
    <>
      <div className="h-[250px] sm:h-[574px] md:h-screen">
        <img
          className="absolute -z-50 w-full h-[250px] object-cover left-0 sm:h-[574px] md:h-screen"
          src="/src/assets/banner.png"
          alt="Background"
        />
        <div className="container">
          <div className="flex flex-col text-center items-center pt-8 sm:pt-[150px] lg:pt-[160px]">
            <Title />
            <Subtitle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
