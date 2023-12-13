import { FC } from "react";

const Photo: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-2 px-4 sm:mt-0 sm:px-0">
        <img
          className="w-full h-[302px] object-cover bg-[#D9D9D91A] rounded-3xl sm:w-[275px] sm:h-[516px] sm:rounded-[11px] md:w-[373px] lg:w-[460px] lg:h-[460px]"
          src="src/assets/kawaiha.png"
          alt="Kawaiha"
        />
      </div>
    </>
  );
};

export default Photo;
