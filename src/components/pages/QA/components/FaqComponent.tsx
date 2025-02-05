import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { faqData } from "@/utils/data";

const FaqComponent = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };

  return (
    <div className="flex flex-col gap-4 text-background">
      {faqData.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-4 rounded-lg shadow-md lg:mr-10"
          layout
        >
          <div
            className="flex w-full items-center justify-between cursor-pointer"
            onClick={() => toggleItem(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleItem(idx)}
          >
            <h1 className="text-grey_color-dark font-semibold">
              {item.question}
            </h1>
            <motion.span
              initial={false}
              animate={{ rotate: selected === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowDown className="text-xl text-grey_color-dark" />
            </motion.span>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: selected === idx ? "auto" : 0,
              opacity: selected === idx ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-grey_color text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FaqComponent;
