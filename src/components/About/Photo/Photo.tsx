import { FC } from "react";

const Photo: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <img
          className="w-[288px] h-[302px] bg-[#D9D9D91A] rounded-3xl"
          src="src/assets/kawaiha.png"
          alt="Kawaiha"
        />
      </div>
    </>
  );
};

export default Photo;
