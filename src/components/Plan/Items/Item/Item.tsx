import { FC } from "react";
import minus from "/src/assets/minus.svg";
import plus from "/src/assets/plus.svg";
import { type PlanProps } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/hooks";
import { changeActive } from "../../../../features/person.slice";
import Text from "../../Text/Text";

const Item: FC<PlanProps> = ({ item, index }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="w-full px-4 mt-1 first:mt-0 sm:w-[360px] sm:px-0 md:hidden">
        <button
          style={
            item.isActive
              ? {
                  borderRadius: "5.4px 5.4px 0 0",
                  backgroundColor: "#D9D9D926",
                }
              : { borderRadius: "5.4px", backgroundColor: "#D9D9D91A" }
          }
          className="py-2 px-2 w-full flex justify-between items-center"
          onClick={() => {
            dispatch(changeActive(index));
          }}
        >
          <h4 className="text-sm sm:text-base">{item.title}</h4>
          <img
            src={item.isActive ? minus : plus}
            alt={item.isActive ? "Minus" : "Plus"}
          />
        </button>
        {item.isActive && (
          <>
            <div className="bg-[#D9D9D91A] w-full rounded-b-[29.1px] px-3 pt-3 pb-4">
              <p className="text-xs sm:text-base sm:leading-[1.2]">
                {item.text}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="hidden w-full px-4 mt-1 first:mt-0 sm:w-[360px] sm:px-0 md:block">
        <button
          style={
            item.isActive
              ? {
                  backgroundColor: "#D9D9D926",
                }
              : { backgroundColor: "#D9D9D91A" }
          }
          className="py-2 px-4 w-full flex justify-between items-center rounded-[5.4px]"
          onClick={() => {
            dispatch(changeActive(index));
          }}
        >
          <h4 className="text-sm sm:text-base">{item.title}</h4>
        </button>
      </div>
    </>
  );
};

export default Item;
