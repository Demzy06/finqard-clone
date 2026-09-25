import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MenuOutlineIcon from "@iconify-react/basil/menu-outline";

function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    // <header
    //   // ref={ref}
    //   className={`md:h-fit flex justify-between items-center px-8 py-14 w-full h-18 fixed top-0 left-0 right-0 z-1000 md:pl-4 md:pr-10 md:bg-[rgb(249, 249, 249)]/70 backdrop-blur-lg ${navIsOpen ? "bg-white" : "bg-[#F9F9F9]/70 backdrop-blur-lg"} md:h-0 ${true ? "opacity-100 ease-in translate-y-0" : "opacity-0 -translate-y-10"} transition-all duration-300`}
    // >
    <header
      className={`md:h-fit flex px-8 py-9 items-center bg-[#F9F9F9]/20 backdrop-blur-lg sticky top-0 left-0 right-0 z-100 `}
    >
      <Logo />
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
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
    </header>
  );
}

export default Header;
