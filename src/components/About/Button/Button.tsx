import { FC } from "react";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-2 px-4 sm:px-0 sm:mt-0 sm:pt-8 md:pt-[21px]">
        <div className="w-full h-[50px] bg-[#EB4C42] flex justify-center items-center rounded-[22px] sm:w-[275px] sm:rounded-[10.65px] md:h-[76px] md:w-[373px] lg:w-[500px]">
          <a
            className="font-black text-base md:text-[20px] lg:text-[24px]"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            Смотреть описание на YouTube
          </a>
        </div>
      </div>
    </>
  );
};

export default Button;
