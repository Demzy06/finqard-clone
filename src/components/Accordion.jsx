import { useState } from "react";

function Accordion({ accordion }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="mb-5 bg-white rounded-2xl py-3.5 px-2.5">
      <div
        className="flex justify-between"
        onClick={() => setIsOpen((open) => !open)}
      >
        <p className="w-[70%] text-[18px] font-[550] text-black-700">
          {accordion.question}
        </p>
        <p className="text-[30px] rounded-full border h-fit w-fit px-1">+</p>
      </div>

      <div
        className={`${
          isOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0 "
        } mt-4 text-[18px] grid font-normal text-grey-700 transition-all duration-500 `}
      >
        <div className="overflow-hidden">
          <p className="text-[18px] font-normal text-grey-700">
            {accordion.answer}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Accordion;
