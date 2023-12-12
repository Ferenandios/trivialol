import React, { FC } from "react";
import { type ItemProps } from "../../../../types/types";

const Item: FC<ItemProps> = ({ item }): JSX.Element => {
  return (
    <>
      <div className="mt-2 first:mt-0 flex justify-center">
        <div className="w-[288px] h-20 flex items-center px-4 bg-[#D9D9D91A] rounded-[20px]">
          <div>
            <img
              className="w-16 h-16 rounded-full"
              src={item.avatar}
              alt="Person"
            />
          </div>
          <div className="ml-5">
            <span className="text-base">{item.name}</span>
            <p className="mt-2 w-[137px] text-sm">{item.about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
