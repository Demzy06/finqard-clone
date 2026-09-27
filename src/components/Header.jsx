import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const headerEl = useRef(null);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(function () {
    const headerHeight = headerEl.current.getBoundingClientRect().height;

    function handleScroll() {
      setIsIntersecting((window.scrollY = headerHeight));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerEl}
      className={`md:h-fit flex px-7 py-9 items-center ${isIntersecting ? "bg-[#F9F9F9]/20 backdrop-blur-lg" : "bg-[#F6F3FC]"}  sticky top-0 left-0 right-0 z-100 md:px-10`}
    >
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </header>
  );
}

export default Header;
