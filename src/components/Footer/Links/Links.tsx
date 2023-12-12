import { FC } from "react";
import { type ILinks } from "../../../types/types";
import Link from "./Link/Link";

const Links: FC = (): JSX.Element => {
  const links: ILinks[] = [
    { link: "https://t.me/kolyanv", social: "Telegram" },
    { link: "mailto:www.terunplay@gmail.com", social: "Email" },
    { link: "https://habr.com/ru/users/Ferenando/", social: "Habr" },
  ];
  return (
    <>
      <div className="flex justify-center">
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </>
  );
};

export default Links;
