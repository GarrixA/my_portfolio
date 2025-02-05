import React from "react";
import FaqComponent from "./components/FaqComponent";
import faq_image from "@/public/faq_image.png";
import Image from "next/image";

const Faq = () => {
  return (
    <div
      className="flex items-center flex-col gap-5 justify-center bg-background lg:h-screen py-10 lg:py-0 px-[10%] mx-auto"
      id="faq"
    >
      <h1 className="text-3xl lg:text-5xl mb-8 text-center font-bold">
        Frequently Asked <b className="text-accent">Questions</b>
      </h1>
      <div className="flex items-center flex-col lg:flex-row justify-center">
        <div className="w-full h-full hidden lg:flex">
          <Image
            src={faq_image.src}
            alt="faq-image"
            width={464}
            height={320}
            className="w-full h-full object-contain"
          />
        </div>
        <FaqComponent />
      </div>
    </div>
  );
};

export default Faq;
