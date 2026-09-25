import { Link } from "react-router-dom";
import { featuresNavLinks } from "../data/Navbar";

function FeaturesNavLinks() {
  return (
    <div className="mt-3 p-4 bg-grey-300 rounded-xl">
      <ul className="grid gap-y-3">
        {featuresNavLinks.map((feature) => (
          <li>
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
