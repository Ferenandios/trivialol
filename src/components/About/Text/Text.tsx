import { FC } from "react";
import { type TextProps } from "../../../types/types";

const Text: FC<TextProps> = ({ text }): JSX.Element => {
  return (
    <>
      <div className="flex justify-center items-center mt-2 first:mt-0">
        <p className="w-[288px] rounded-[27.6px] bg-[#D9D9D91A] px-3 py-4 text-justify text-xs font-light box-border">
          {text}
        </p>
      </div>
    </>
  );
};

export default Text;
