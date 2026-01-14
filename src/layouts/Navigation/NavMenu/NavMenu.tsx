import type { ComponentPropsWithRef } from "react";
import NavLink from "../../../Components/NavLink/NavLink";
import clsx from "clsx";
import bookmark from "../../../assets/bookmark.svg";
import logo from "../../../assets/logo-white.svg";
import { FaX } from "react-icons/fa6";
import SocialLinks from "../../SocialLinks/SocialLinks";
import Button from "../../../Components/Button/Button";

const navLinks = ["features", "pricing", "contact"];
interface NavMenuProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
  closeMenu: () => void;
}

const NavMenu = ({ closeMenu, className, ...props }: NavMenuProps) => {
  return (
    <div
      className={clsx("flex flex-col justify-between h-full", className)}
      {...props}
    >
      <div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <img className="text-white" src={logo} alt="" />
            <img src={bookmark} alt="" />
          </div>
          <button
            onClick={closeMenu}
            autoFocus
            className=" focus-visible:outline-2 rounded-[0.3125rem] focus-visible:outline-red-400 xl:hidden"
            aria-label="Close Navigation Menu"
          >
            <FaX
              className="text-white hover:text-red-400 transition-colors duration-200 delay-75 ease-in-out"
              size={15}
            />
          </button>
        </div>
        <ul className="flex flex-col  text-center mt-10 border-t-white/15 border-t">
          {navLinks.map((text) => (
            <>
              <li className="border-b-white/15 border-b py-8">
                <NavLink
                  className="text-white text-8-regular!"
                  href={`/${text}`}
                >
                  {text}
                </NavLink>
              </li>
            </>
          ))}
        </ul>
        <div className="mb-12 flex flex-col justify-between">
          <Button
            type="button"
            variant="dialog"
            className="mt-6 md:mt-8 w-full uppercase "
          >
            login
          </Button>
        </div>
      </div>
      <SocialLinks className="mx-auto" />
    </div>
  );
};

export default NavMenu;
