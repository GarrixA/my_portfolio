/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { sliders } from "@/utils/data";
import { motion } from "framer-motion";
import { imageVariants, textVariants, buttonVariants } from "@/utils/variants";
import ShowCards from "./ShowCards";
import { IoMdClose } from "react-icons/io";

const PortfolioComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [checkDev, setCheckDev] = useState(false);

  const toggleCheckDev = () => {
    setCheckDev(!checkDev);
    console.log("Clicked");
  };

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
    <div className="p-2 lg:p-3 bg-white rounded-md relative overflow-hidden w-full">
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
        <div className="w-full h-full absolute bg-black/50 top-0"></div>
        <motion.div
          key={currentIndex}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col gap-4 absolute top-4 lg:top-20 left-4 lg:left-20 z-20 text-white w-3/5"
        >
          <h1 className="font-black lg:text-3xl 2xl:text-4xl">
            {sliders[currentIndex].title}
          </h1>
          <p className="font-bold text-sm lg:text-xl 2xl:text-2xl">
            {sliders[currentIndex].description}
          </p>
          <motion.div
            className="mt-2"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => {
              if (sliders[currentIndex].link == "#portfolio") {
                toggleCheckDev();
              }
            }}
          >
            {sliders[currentIndex].link != "#portfolio" ? (
              <Link
                className="bg-accent px-3 py-1 lg:py-2 font-bold rounded-sm text-sm lg:text-xl 2xl:text-xl"
                href={sliders[currentIndex].link}
                target="_blank"
              >
                See demo
              </Link>
            ) : (
              <button className="bg-accent px-3 py-1 lg:py-2 font-bold rounded-sm text-sm lg:text-xl">
                {" "}
                See demo
              </button>
            )}
          </motion.div>
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

      <div className="absolute z-30 bottom-3 lg:bottom-5 right-3 lg:right-5">
        <ShowCards
          image={sliders[(currentIndex + 1) % sliders.length].image.src}
          title={sliders[(currentIndex + 1) % sliders.length].title}
        />
      </div>

      {checkDev ? (
        <div className="bg-white w-96 h-96 absolute inset-0 z-30 top-16 left-44 flex flex-col items-center justify-center text-black p-6 rounded-lg shadow-lg">
          <p className="text-lg font-medium text-gray-800 text-center">
            This feature is currently under development. Thank you for your
            patience!
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            onClick={() => toggleCheckDev()}
          >
            Go Back
          </button>
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl transition"
            onClick={toggleCheckDev}
            aria-label="Close"
          >
            <IoMdClose />
          </button>
        </div>
      ) : null}

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
