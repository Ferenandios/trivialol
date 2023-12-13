import { FC } from "react";
import minus from "/src/assets/minus.svg";
import plus from "/src/assets/plus.svg";
import { type PlanProps } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/hooks";
import { changeActive } from "../../../../features/person.slice";

const Item: FC<PlanProps> = ({ item, index }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="w-full px-4 mt-1 first:mt-0">
        <button
          className="py-2 px-2 bg-[#D9D9D926] w-full flex justify-between items-center rounded-[5.4px]"
          onClick={() => {
            dispatch(changeActive(index));
          }}
        >
          <h4 className="text-sm">{item.title}</h4>
          <img
            src={item.isActive ? minus : plus}
            alt={item.isActive ? "Minus" : "Plus"}
          />
        </button>
        {item.isActive && (
          <>
            <div className="bg-[#D9D9D91A] w-full rounded-b-[29.1px] px-3 pt-3 pb-4">
              <p className="text-xs">{item.text}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Item;
