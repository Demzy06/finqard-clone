import { motion } from "motion/react";

const items = ["React", "JavaScript", "CSS", "HTML"];

function Ticker({ start, end, styles }) {
  return (
    <div className={`overflow-hidden ${styles}`}>
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: [start, end],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((items, i) => (
          <span key={i} className="py-6 px-9 bg-white rounded-lg">
            {items}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Ticker;
