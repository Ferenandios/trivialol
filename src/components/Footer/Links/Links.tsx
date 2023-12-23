import { FC } from "react";
import { type ILinks } from "../../../types/types";
import Link from "./Link/Link";
import styles from "./Links.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import { useAppSelector } from "../../../hooks/hooks";

const Links: FC = (): JSX.Element => {
  const { showCopy } = useAppSelector((state) => state.person);
  const links: ILinks[] = [
    { link: "https://t.me/kolyanv", social: "Telegram" },
    { link: "mailto:www.terunplay@gmail.com", social: "Email" },
    { link: "https://habr.com/ru/users/Ferenando/", social: "Habr" },
  ];
  return (
    <>
      <div className={styles.links}>
        {links.map((link, index) => (
          <Link key={index} link={link} id={index} />
        ))}
      </div>
      {showCopy && (
        <div className="fixed z-50 flex justify-center w-full top-10">
          <div className="bg-[#D9D9D91A] rounded-md px-3 py-2">
            <span className="flex items-center">
              <FaCircleCheck size={15} className="mr-1" />
              Скопирована!
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
