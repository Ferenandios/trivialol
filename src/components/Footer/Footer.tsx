import { FC } from "react";
import Links from "./Links/Links";
import Copyright from "./Copyright/Copyright";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="bg-black pt-6 pb-3 mt-6 sm:mt-7 sm:pt-7">
        <div className="container mx-auto">
          <Links />
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
