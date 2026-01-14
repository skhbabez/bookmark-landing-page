import { useState, type ComponentPropsWithRef } from "react";
import bookmark from "../../assets/bookmark-dark.svg";
import logo from "../../assets/logo.svg";
import clsx from "clsx";
import NavLink from "../../Components/NavLink/NavLink";
import { FaBars } from "react-icons/fa6";
import Button from "../../Components/Button/Button";
import Dialog from "../../Components/Dialog/Dialog";
import NavMenu from "./NavMenu/NavMenu";

const navLinks = ["features", "pricing", "contact"];

const Navigation = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"nav">, "children">) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
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
              <li key={text}>
                <NavLink href={`/${text}`}>{text}</NavLink>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            className="uppercase px-[2.15625rem] min-h-10!"
            variant="submit"
          >
            login
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="focus-visible:outline-red-400 xl:hidden"
          aria-label="Open Navigation"
        >
          <FaBars
            className="text-blue-950 hover:text-red-400 transition-colors duration-200 delay-75 ease-in-out   "
            size={20}
          />
        </button>
      </nav>
      <Dialog
        className="xl:hidden main-spacer backdrop:bg-blue-950/95 bg-transparent h-screen pb-12 pt-10 w-screen max-h-none max-w-none"
        isOpen={menuOpen}
      >
        <NavMenu closeMenu={() => setMenuOpen(false)} />
      </Dialog>
    </>
  );
};

export default Navigation;
