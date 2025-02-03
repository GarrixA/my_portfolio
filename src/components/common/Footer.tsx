import Logo from "@/public/Logo.svg";
import Ig from "@/public/Instagram.svg";
import Tt from "@/public/Twitter.svg";
import Lin from "@/public/Linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col py-5 gap-6 text-white bg-[#020617] px-[10%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
        <div className="flex flex-col items-start justify-center flex-1 gap-3 mt-2">
          <div className="w-1/2">
            <Image
              src={Logo}
              alt="log"
              width={468}
              height={80}
              className="w-full object-contain"
            />
          </div>
          <p className="text-center lg:text-left">
            Web designer with a keen eye for aesthetics and user experience.
          </p>
        </div>

        <div className="flex flex-col gap-3 flex-1 mt-8 lg:mt-0">
          <h1 className="text-center lg:text-left text-xl">
            Subscribe to get more updates on my new articles
          </h1>
          <form className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="type your email"
              className="p-2 text-lg italic bg-transparent border border-white text-white"
            />
            <button className="p-2 text-lg italic bg-[#864f59] border-none rounded-lg text-white">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <h1 className="text-center lg:text-left text-xl">Follow me on</h1>
          <div className="flex items-center justify-center gap-2 w-full">
            <Link
              href="http://www.instagram.com/aphrodisgarrix/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={Ig}
                alt="instagram"
                width={10}
                height={10}
                className="w-full object-contain"
              />
            </Link>
            <Link
              href="http://twitter.com/AphrodisGarrix"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={Tt}
                alt="twitter"
                width={10}
                height={10}
                className="w-full object-contain"
              />
            </Link>
            <Link
              href="http://www.linkedin.com/in/aphrodis-uwineza-961079281/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={Lin}
                alt="linkdin"
                width={10}
                height={10}
                className="w-full object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Call Me Section */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <h1 className="text-center lg:text-left text-xl">
            You can directly contact me On
          </h1>
          <span className="text-center text-lg">+250 789 438 437</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col lg:flex-row items-center justify-between border-t border-white mt-4">
        <div className="text-center lg:text-left text-sm">
          <i>
            Copyright @2024 <Link href="#home">Aphrodis Uwineza</Link>
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
