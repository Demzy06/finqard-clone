import { Link } from "react-router-dom";
import LogoImg from "../assets/logo/finqard-logo.png";
import {
  featuresFooterNavLinks,
  legalFooterNavLinks,
  quickLinksFooterNavLinks,
  socialsFooterNavLinks,
} from "../data/Navbar";

function FooterNavigations() {
  return (
    <nav className="py-15 bg-[#F5F5FE] px-7 xl:px-23 xl:pt-20 xl:pb-40">
      <img src={LogoImg} alt="finqard-logo" className="mb-12" />

      <div className="xl:flex">
        <div className="w-[70%] xl:w-[43%]">
          <h4 className="mb-10 text-black-700 text-[18px] font-[450]">
            FinQard is a versatile app that enables users to buy and sell gift
            cards, pay bills, and utilize a virtual card for seamless online
            transactions.
          </h4>
          <p className="text-grey-600 text-[18px] ">
            Integrity, dedication and excellence in value have been the pillars
            to which our company hinges its practices and policies on.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-y-5 gap-x-15 mt-10 xl:w-[40%] xl:flex xl:mt-0 xl:m-auto">
          <li className="flex flex-col gap-y-3 h-fit xl:gap-y-2">
            <div className="text-black-700 text-[16px] font-[550]">
              Quick Links
            </div>
            {quickLinksFooterNavLinks.map((link) => (
              <Link
                to={link.path}
                className="text-grey-700 text-[16px] xl:w-25"
              >
                {link.title}
              </Link>
            ))}
          </li>
          <li className="flex flex-col gap-y-3 h-fit xl:gap-y-2">
            <div className="text-black-700 text-[16px] font-[550]">
              Features
            </div>
            {featuresFooterNavLinks.map((link) => (
              <Link
                to={link.path}
                className="text-grey-700 text-[16px] xl:w-29"
              >
                {link.title}
              </Link>
            ))}
          </li>
          <li className="flex flex-col gap-y-3 h-fit xl:gap-y-2">
            <div className="text-black-700 text-[16px] font-[550]">Legal</div>
            {legalFooterNavLinks.map((link) => (
              <Link
                to={link.path}
                className="text-grey-700 text-[16px] xl:w-30"
              >
                {link.title}
              </Link>
            ))}
          </li>
          <li className="flex flex-col gap-y-3 h-fit xl:gap-y-2">
            <div className="text-black-700 text-[16px] font-[550]">Socials</div>
            {socialsFooterNavLinks.map((link) => (
              <Link to={link.path} className="text-grey-700 text-[16px]">
                {link.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default FooterNavigations;
