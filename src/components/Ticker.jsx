import { motion } from "motion/react";

const items = [
  "Google",
  "Steam",
  "Sephora",
  "Nike",
  "Roblox",
  "Xbox",
  "PSN",
  "RazerGold",
  "Walmart",
  "Visa",
  "Target",
];

function Ticker({ start, end, styles }) {
  return (
    <div className={`overflow-hidden ${styles}`}>
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: [start, end],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((items, i) => (
          <span
            key={i}
            className="py-6 px-9 bg-white rounded-lg md:text-[30px]"
          >
            {items}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Ticker;
