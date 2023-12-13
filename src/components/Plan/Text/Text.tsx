import { FC } from "react";
import { useAppSelector } from "../../../hooks/hooks";

const Text: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.person);
  return (
    <>
      <div className="ml-6">
        {items.map(
          (item) =>
            item.isActive && (
              <>
                <p className="text-base leading-[1.1] w-[360px] max-h-[220px] bg-[#D9D9D91A] rounded-[30px] px-3 py-4 text-justify">
                  {item.text}
                </p>
              </>
            )
        )}
      </div>
    </>
  );
};

export default Text;
