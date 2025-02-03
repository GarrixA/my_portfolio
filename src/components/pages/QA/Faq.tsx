import React from "react";
import FaqComponent from "./components/FaqComponent";
import faq_image from "@/public/faq_image.png";
import Image from "next/image";

const Faq = () => {
  return (
    <div
      className="flex items-center justify-center bg-background h-screen px-[10%] mx-auto"
      id="faq"
    >
      <div className="w-full h-full">
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
  );
};

export default Faq;
