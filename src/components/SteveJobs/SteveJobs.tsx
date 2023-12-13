import { FC } from "react";

const SteveJobs: FC = (): JSX.Element => {
  return (
    <>
      <div className="px-4 mt-4 sm:flex sm:justify-center sm:px-0 sm:mt-7 md:mt-9">
        <div className="w-full h-[60px] bg-[#D9D9D91A] rounded-xl font-raleway font-black text-lg flex justify-center items-center sm:w-[330px] md:w-[350px] md:h-[70px] lg:w-[400px] lg:h-20">
          <a
            href="https://www.youtube.com/watch?v=3nJs6GPmEZs"
            target="_blank"
            className="w-full h-full flex justify-center items-center sm:text-lg md:text-xl lg:text-2xl"
          >
            Поддержать продукт
          </a>
        </div>
      </div>
    </>
  );
};

export default SteveJobs;
