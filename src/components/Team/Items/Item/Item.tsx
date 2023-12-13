import { FC } from "react";
import { type ItemProps } from "../../../../types/types";

const Item: FC<ItemProps> = ({ item }): JSX.Element => {
  return (
    <>
      <div className="px-4 mt-2 first:mt-0 flex justify-center sm:justify-start sm:mt-0 sm:px-0 md:ml-9 md:first:ml-0">
        <div className="w-[288px] h-20 flex items-center px-4 bg-[#D9D9D91A] rounded-[20px] sm:w-[176px] sm:h-[176px] sm:flex-col sm:px-0 text-center md:w-[200px] md:h-[200px]">
          <div>
            <img
              className="w-16 h-16 rounded-full sm:w-[50px] sm:h-[50px] sm:mt-4 md:w-[56px] md:h-[56px]"
              src={item.avatar}
              alt="Person"
            />
          </div>
          <div className="ml-5 sm:mt-4 sm:ml-0">
            <span className="text-base">{item.name}</span>
            <p className="mt-2 w-[129px] text-sm sm:mt-3 sm:text-center">
              {item.about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
