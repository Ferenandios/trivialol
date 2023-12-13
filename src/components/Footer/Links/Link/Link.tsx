import React, { FC } from "react";
import { type LinkProps } from "../../../../types/types";

const Link: FC<LinkProps> = ({ link }): JSX.Element => {
  return (
    <>
      <a
        className="text-[10px] font-raleway font-semibold ml-1 first:ml-0 sm:ml-3 md:ml-4 md:text-sm"
        target="_blank"
        href={link.link}
      >
        {link.social}
      </a>
    </>
  );
};

export default Link;
