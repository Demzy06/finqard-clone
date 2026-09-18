import Avatar1 from "../assets/avatars/avatar1.webp";

function TestimonialCard({ testimony }) {
  return (
    <div
      className={`${testimony.type === "base" ? " bg-purple-700 text-white" : "bg-grey-300 text-grey-800 flex flex-col-reverse"} px-7 py-10  mt-8 rounded-2xl`}
    >
      <div className="flex items-center">
        <div className=" h-12 w-12 mr-4">
          <img
            src={testimony.avatar}
            alt="avatar-pic"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <span>
          <p>{testimony.name}</p>
          <p className="underline">{testimony.username}</p>
        </span>
      </div>

      <div className="mt-7">
        <p className="mb-5 text-[16px] font-[380]">
          The app is incredibly easy to use, transactions are fast, and the
          rates are great. I also love the transparency—you always know exactly
          what to expect before confirming a trade.
        </p>

        {testimony.paragraphTwo && (
          <p className="text-[16px] font-[380]">
            I'll gladly recommend it to whoever is looking for a secure platform
            to trade and make transactions!
          </p>
        )}
      </div>
    </div>
  );
}

export default TestimonialCard;
