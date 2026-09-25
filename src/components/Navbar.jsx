import { Link } from "react-router-dom";

import { Link as LinkScroll } from "react-scroll";
import { navLinks } from "../data/Navbar";
import FeaturesNavLinks from "./FeaturesNavLinks";

function Navbar({ navIsOpen, setNavIsOpen }) {
  return (
    // <nav
    //   className={`${navIsOpen ? `block` : `hidden md:block`} flex pt-14 flex-col items-center h-dvh fixed  top-18 z-100 w-full md:h-20 md:p-0 md:w-[80%] lg:w-[70%] bg-white md:bg-transparent md:top-0 md:relative md:flex md:flex-row`}
    // >
    <nav
      className={`${navIsOpen ? `absolute ` : `hidden md:block`} top-20 left-0 w-[90%] ml-[5%] z-100 bg-white px-6 rounded-4xl py-7 border border-gray-200 h-120 overflow-scroll`}
    >
      <ul
        // ref={ref}
        className={`${true ? "opacity-100 ease-in-out translate-y-0 scale-[1]" : "opacity-0 translate-y-2 scale-[0.9]"} transition-all duration-800 md:flex md:justify-between md:w-full md:items-center h-fit m-auto w-full `}
      >
        <div className="md:flex md:justify-between md:w-[70%] lg:w-[55%]">
          {navLinks.map((nav) => (
            <li className="mb-4 w-fit text-[16px] font-normal md:font-medium scale-x-[1.1] md:m-0 md:text-[16px] ">
              <Link
                to={nav.path}
                className="md:h-fit cursor-pointer"
                onClick={() => setNavIsOpen((isOpen) => !isOpen)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </div>

        {/* <ButtonJumpTo
          text="Start Project"
          className="pl-12 pr-12 p-3.5 font-semibold bg-black text-white tracking-wider text-[17px] rounded-3xl w-fit md:p-2 md:pl-4 md:pr-4 md:text-[14px] md:font-medium inline-block mt-10 md:mt-0"
          path="contact"
          setNavIsOpen={setNavIsOpen}
        /> */}
      </ul>
      <FeaturesNavLinks />
    </nav>
  );
}

export default Navbar;

//  to={nav.path}
//                 smooth={true}
//                 duration={500}
//                 offset={-65}
