import Banner from "../assets/secondary/banner-small.svg";
import MockupImg from "../assets/hero/mockup-2.webp";
import NewsMediaPrev from "./NewsMediaPrev";
import FooterNavigations from "./FooterNavigations";

function Footer() {
  return (
    <footer className=" pt-6">
      <div className="px-4">
        <div className="bg-[url('./assets/secondary/banner-small.svg')] bg-no-repeat bg-cover h-fit rounded-3xl pt-18 px-5">
          <div className="px-6">
            <h3 className="text-white text-center text-[30px] font-[550]">
              Start Trading to using FinQard
            </h3>
            <p className="text-purple-100 mt-5 text-[18px] font-[350]">
              Download the FinQard app to sell your gift cards on the go.
            </p>
          </div>
          <div className="mt-4 flex justify-between w-[80%] m-auto h-15">
            <button className="text-[10px] w-[47%] font-normal bg-purple-400  py-5 px-7 rounded-4xl text-white flex items-center justify-center">
              <p>Get it on iOS</p>
            </button>
            <button className="text-[10px] w-[50%] font-normal bg-purple-400  py-5 px-7 rounded-4xl text-white flex items-center justify-center">
              <p>Get it on Andriod</p>
            </button>
          </div>

          <div className="mt-22 px-5">
            <img src={MockupImg} alt="banner-pic" className="" />
          </div>
        </div>
      </div>

      <NewsMediaPrev />
      <FooterNavigations />
    </footer>
  );
}

export default Footer;
