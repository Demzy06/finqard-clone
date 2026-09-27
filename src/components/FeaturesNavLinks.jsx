import { Link } from "react-router-dom";
import { featuresNavLinks } from "../data/Navbar";

function FeaturesNavLinks({ isFeaturesOpen }) {
  return (
    // <div className="mt-3 p-4 bg-grey-300 rounded-xl md:absolute lg:w-190 xl:w-200 xl:left-118 md:top-20 md:left-44 md:p-6 md:rounded-4xl">
    <div
      className={`mt-3 p-4 bg-grey-300 rounded-xl md:absolute md:top-21 md:p-6 md:rounded-4xl md:ml-30 md:w-[75%] md:mt-1.5 ${isFeaturesOpen ? "lg:block" : "lg:hidden"}`}
    >
      <ul className="grid gap-y-3 md:grid md:grid-cols-2 md:gap-8 ">
        {featuresNavLinks.map((feature) => (
          <li className="md:p-3 md:rounded-2xl">
            <Link to={feature.path} className="">
              <div className="flex items-center">
                <span className="p-3 rounded-full bg-grey-100 mr-3">
                  <img src={feature.icon} alt="" className=" w-9" />
                </span>
                <span>
                  <p className="text-[14px] font-[550]">
                    {feature.featureHeaderText}
                  </p>
                  <p className="text-[14px] text-grey-600">
                    {feature.featureBriefText}
                  </p>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesNavLinks;
