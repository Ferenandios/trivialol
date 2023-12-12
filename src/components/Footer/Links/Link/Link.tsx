import React, { FC } from "react";
import { type LinkProps } from "../../../../types/types";

const Link: FC<LinkProps> = ({ link }): JSX.Element => {
  return (
    <>
      <a
        className="text-[10px] font-raleway font-semibold ml-1 first:ml-0"
        target="_blank"
        href={link.link}
      >
        {link.social}
      </a>
    </>
  );
};

export default Link;
