import Image from "next/image";
import image2 from "@/public/image2.jpg";

const AboutPageComponent = () => {
  return (
    <div className="flex items-center sm:flex-row flex-col-reverse gap-12 lg:gap-24 lg:mt-0 py-10 lg:py-0">
      <div className="relative w-full">
        <div className="h-96 w-full sm:w-80 lg:w-96 border-[8px] lg:border-[14px] rounded-lg border-accent"></div>
        <div className="w-full sm:w-80  lg:w-96 h-96 absolute -top-4 lg:-top-8 left-4 lg:-right-8 rounded-lg overflow-hidden">
          <Image
            width={384}
            height={384}
            alt="about-image"
            src={image2.src}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl lg:text-5xl font-extrabold">
          About <b className="text-accent">Me.</b>
        </div>
        <div>
          <p className="text-base lg:text-lg">
            I thrive on turning ideas into interactive and user-friendly
            experiences. My journey in the world of web development has been an
            exciting adventure of constant learning and creating.
          </p>
          <p className="text-lg mt-2">
            From crafting responsive layouts to implementing state-of-the-art
            features, I enjoy the challenges that come with building modern and
            dynamic web applications
          </p>
        </div>
        <div>
          <button className="text-base mt-2 lg:mt-6 px-6 py-2 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
