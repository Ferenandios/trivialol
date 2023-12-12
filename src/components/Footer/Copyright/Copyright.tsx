import { FC } from "react";

const Copyright: FC = (): JSX.Element => {
  return (
    <>
      <div className="text-[10px] font-raleway font-semibold flex mt-9 text-[#FFFFFF3B] justify-center">
        <h6>«Невероятно простой»</h6>
        <h6 className="ml-1">&copy; 2023, Рофлан </h6>
      </div>
    </>
  );
};

export default Copyright;
