import { FC } from "react";
import { type TextProps } from "../../../types/types";

const Text: FC<TextProps> = ({ text }): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center mt-2 first:mt-0 px-4 sm:px-0 sm:mt-4 md:mt-[30px] lg:mt-0">
        <p className="w-full rounded-[27.6px] bg-[#D9D9D91A] px-3 py-4 text-justify text-xs font-light box-border sm:w-[317px] sm:text-base sm:leading-[1.2] lg:w-[500px]">
          {text}
        </p>
      </div>
    </>
  );
};

export default Text;
