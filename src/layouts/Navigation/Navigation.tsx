import type { ComponentPropsWithRef } from "react";
import bookmark from "../../assets/bookmark-dark.svg";
import logo from "../../assets/logo.svg";
import clsx from "clsx";
import NavLink from "../../Components/NavLink/NavLink";
import { FaBars } from "react-icons/fa6";
import Button from "../../Components/Button/Button";

const navLinks = ["features", "pricing", "contact"];

const Navigation = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"nav">, "children">) => {
  return (
    <nav
      className={clsx("flex justify-between items-center gap-12", className)}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" />
        <img src={bookmark} alt="" />
      </div>
      <div className="hidden xl:flex gap-12 items-center ms-auto">
        <ul className="contents">
          {navLinks.map((text) => (
            <li>
              <NavLink href={`/${text}`}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <Button
          className="uppercase px-[2.15625rem] min-h-10!"
          variant="submit"
        >
          login
        </Button>
      </div>
      <button className="focus-visible:outline-red-400 xl:hidden">
        <FaBars
          className="text-blue-950 hover:text-red-400 transition-colors duration-200 delay-75 ease-in-out   "
          size={20}
          aria-label="Open Navigation"
        />
      </button>
    </nav>
  );
};

export default Navigation;
