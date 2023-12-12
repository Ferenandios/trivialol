import { FC } from "react";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="w-[288px] h-[50px] bg-[#EB4C42] flex justify-center items-center rounded-[22px]">
          <a
            className="font-black text-base"
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
