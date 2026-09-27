import { Link } from "react-router-dom";

import { Link as LinkScroll } from "react-scroll";
import { navLinks } from "../data/Navbar";
import FeaturesNavLinks from "./FeaturesNavLinks";
import Logo from "./Logo";
import MenuOutlineIcon from "@iconify-react/basil/menu-outline";
import { useState } from "react";

function Navbar({ navIsOpen, setNavIsOpen }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  return (
    // <nav
    //   className={`${navIsOpen ? `block` : `hidden md:block`} flex pt-14 flex-col items-center h-dvh fixed  top-18 z-100 w-full md:h-20 md:p-0 md:w-[80%] lg:w-[70%] bg-white md:bg-transparent md:top-0 md:relative md:flex md:flex-row`}
    // >
    // <nav
    //   className={`${navIsOpen ? `absolute ` : `hidden md:block`} top-20 left-0 w-[90%] ml-[5%] z-100 bg-white px-6 rounded-4xl py-7 border border-gray-200 h-120 overflow-scroll md:h-fit md:overflow-hidden md:bg-transparent md:rounded-none md:border-0`}
    // >
    <nav
      className={` flex items-center w-full top-20 left-0 bg-transparent z-100  py-0 h-fit overflow-scroll md:h-fit md:overflow-hidden md:bg-transparent md:rounded-none md:border-0 md:flex md:justify-between md:w-full md:py-0 md:px-0  `}
    >
      <Logo />
      {/* <ul
        // ref={ref}
        className={`${true ? "opacity-100 ease-in-out translate-y-0 scale-[1]" : "opacity-0 translate-y-2 scale-[0.9]"} transition-all duration-800 md:flex md:justify-between md:w-full md:items-center h-fit m-auto w-full `}
      > */}
      <ul
        // ref={ref}
        className={`md:flex md:justify-between  md:items-center m-auto w-[87%]  ${navIsOpen ? `absolute` : `hidden md:block`} top-20 md:mt-0 md:top-0 bg-white rounded-4xl px-6 py-7 h-120 md:h-full overflow-scroll md:overflow- xl:overflow-hidden mt-0.5 md:flex-col md:w-fit md:m-auto md:rounded-none md:py-3.5 lg:bg-transparent `}
      >
        <div className="md:flex md:justify-between md:w-full md:gap-x-8 md:h-full">
          {navLinks.map((nav) => (
            <li
              className={`mb-4 w-fit text-[16px] font-normal md:font-medium scale-x-[1.1] md:m-0 md:text-[16px] ${nav.title === "Products" ? "max-sm:hidden" : "lg:block"}`}
              onClick={() =>
                nav.title === "Products" &&
                setIsFeaturesOpen((isOpen) => !isOpen)
              }
            >
              <Link
                to={nav.path && nav.path}
                className="md:h-fit cursor-pointer"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </div>
        <FeaturesNavLinks isFeaturesOpen={isFeaturesOpen} />
        <div className="flex pt-5 justify-center lg:block">
          <button
            className="pl-12 pr-12 p-3.5 font-light
          bg-purple-700 text-white tracking-wider text-[18px] rounded-3xl w-fit
          md:p-2 md:pl-4 md:pr-4 md:text-[14px] md:font-medium 
           md:mt-0 m-auto inline-block md:hidden"
          >
            Download The App
          </button>
        </div>
      </ul>
      <button
        className="pl-12 pr-12 p-3.5 font-semibold
          bg-black text-white tracking-wider text-[17px] rounded-3xl w-fit
          md:p-2 md:pl-4 md:pr-4 md:text-[14px] md:font-medium 
          mt-10 md:mt-0 hidden md:block md:py-3.5"
        path="contact"
        setNavIsOpen={setNavIsOpen}
      >
        Download The App
      </button>
      <button
        className="h-fit ml-auto md:hidden  "
        onClick={() => setNavIsOpen((isOpen) => !isOpen)}
      >
        {navIsOpen ? (
          "-"
        ) : (
          <MenuOutlineIcon height="2em" style={{ color: "#6200ee" }} />
        )}
      </button>
    </nav>
  );
}

export default Navbar;

//  to={nav.path}
//                 smooth={true}
//                 duration={500}
//                 offset={-65}
