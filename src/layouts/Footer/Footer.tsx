import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import bookmark from "../../assets/bookmark.svg";
import logo from "../../assets/logo.svg";
import NavLink from "../../Components/NavLink/NavLink";
import SocialLinks from "../SocialLinks/SocialLinks";

const links = ["features", "pricing", "contact"];

const Footer = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"footer">, "children">) => {
  return (
    <footer
      className={clsx(
        "bg-blue-950 flex flex-col md:flex-row items-center gap-12 xl:gap-16 py-8.25 md:py-8 md:px-20 xl:px-41.25 md:justify-between xl:justify-start ",
        className
      )}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" />
        <img src={bookmark} alt="" />
      </div>
      <ul className="flex flex-col md:flex-row items-center gap-6">
        {links.map((link) => (
          <li key={link}>
            <NavLink className="text-white" href={`/${link}`}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <SocialLinks className="max-xl:md:gap-6 xl:ml-auto" />
    </footer>
  );
};
export default Footer;
