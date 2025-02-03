import Image from "next/image";
import image2 from "@/public/image2.jpg";

const AboutPageComponent = () => {
  return (
    <div className="flex items-center gap-24">
      <div className="relative">
        <div className="h-96 w-96 border-[14px] rounded-lg border-accent"></div>
        <div className="w-96 h-96 absolute -top-8 -right-8 rounded-lg overflow-hidden">
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
        <div className="text-5xl font-extrabold">
          About <b className="text-accent">Me.</b>
        </div>
        <div>
          <p className="text-lg">
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
          <button className="mt-6 px-6 py-2 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
