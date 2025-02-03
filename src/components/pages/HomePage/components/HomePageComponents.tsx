"use client";

import Image from "next/image";
import image1 from "@/public/image1.jpg";

const HomePageComponents = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-[10%] mx-auto">
      <div className="w-full text-center md:text-left">
        <h4 className="text-accent text-lg font-semibold">Hello, Welcome!</h4>
        <h1 className="font-bold text-4xl 2xl:text-5xl text-primary">
          I am Aphrodis Uwineza
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          A versatile Full Stack Developer skilled in both front-end and
          back-end technologies. Adept at building responsive web applications,
          managing databases, and deploying scalable solutions. Passionate about
          continuous learning and collaborative problem-solving.
        </p>
        <button className="mt-6 px-6 py-2 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
          Contact me
        </button>
      </div>

      <div className="w-full">
        <div className="w-96 h-96 float-right">
          <Image
            src={image1}
            alt="Profile Picture"
            width={384}
            height={384}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-full rounded-xl shadow-lg object-cover select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageComponents;
