/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { sliders } from "@/utils/data";
import { motion } from "framer-motion";
import { imageVariants, textVariants, buttonVariants } from "@/utils/variants";
import ShowCards from "./ShowCards";

const PortfolioComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length
    );
  };

  useEffect(() => {
    setProgress(100);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prevProgress - 100 / 100;
      });
    }, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className="p-2 lg:p-8 bg-white rounded-md relative overflow-hidden w-full">
      <div className="w-full h-full relative">
        <div className="h-96 lg:h-[70vh] w-full">
          <motion.div
            key={currentIndex}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            <Image
              width={480}
              height={320}
              alt="slide image"
              src={sliders[currentIndex].image}
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </div>
        <div className="w-full h-full absolute bg-black/30 top-0"></div>
        <motion.div
          key={currentIndex}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-4 lg:top-20 left-4 lg:left-20 z-20 text-white w-3/5"
        >
          <h1 className="font-bold lg:text-2xl">
            {sliders[currentIndex].title}
          </h1>
          <p className="font-bold text-sm lg:text-base">
            {sliders[currentIndex].description}
          </p>
          <Link href={sliders[currentIndex].link}>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-accent px-3 py-1 lg:py-2 font-bold rounded-sm text-sm lg:text-base mt-2"
            >
              See demo
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full">
        <div className="w-full bg-white h-1 rounded-full">
          <motion.div
            className="h-full bg-accent rounded-full"
            style={{
              transform: `scaleX(${progress / 100})`,
              transformOrigin: "left",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="absolute z-30 bottom-3 lg:bottom-10 right-3 lg:right-10">
        <ShowCards
          image={sliders[(currentIndex + 1) % sliders.length].image.src}
          title={sliders[(currentIndex + 1) % sliders.length].title}
        />
      </div>

      <div className="absolute bottom-5 lg:bottom-20 left-5 lg:left-32 flex items-center gap-4">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={handlePrev}
          disabled={progress / 100 !== 0}
          className={`font-bold px-4 py-1 lg:py-2 text-sm lg:text-base rounded-sm ${
            progress / 100 !== 0 ? "bg-gray-400" : "bg-accent"
          }`}
        >
          Prev
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={handleNext}
          disabled={progress / 100 != 0}
          className={`font-bold px-4 py-1 lg:py-2 text-sm lg:text-base rounded-sm ${
            progress / 100 !== 0 ? "bg-gray-400" : "bg-accent"
          }`}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default PortfolioComponents;
