import { FC } from "react";
import Links from "./Links/Links";
import Copyright from "./Copyright/Copyright";

const Footer: FC = (): JSX.Element => {
  return (
    <>
      <footer className="bg-black pt-6 pb-3 mt-6">
        <div>
          <Links />
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
