/* eslint-disable @typescript-eslint/no-unused-vars */

import { navs } from "@/utils/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const modalVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

interface ModalProps {
  toggleModal: () => void;
}

const NavModal = ({ toggleModal }: ModalProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /**
   * Calculate the speed of the scroll behavior
   * @param targetElement
   * @returns
   */
  const calculateScrollSpeed = (targetElement: HTMLElement) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const sectionPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const distanceFromBottom = totalHeight - sectionPosition;

    return distanceFromBottom > 0
      ? 250 + (distanceFromBottom / totalHeight) * 500
      : 500;
  };

  /**
   * Scroll function targeting element
   * @param targetElement
   * @param duration
   */
  const customScrollTo = (targetElement: HTMLElement, duration: number) => {
    const start = window.scrollY;
    const target = targetElement.getBoundingClientRect().top + window.scrollY;
    const distance = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  /**
   * Function that targets an element
   * To scroll to
   * @param link
   */
  const scrollTo = (link: string) => {
    const targetElement = document.querySelector(link) as HTMLElement;
    if (targetElement) {
      const scrollSpeed = calculateScrollSpeed(targetElement);
      customScrollTo(targetElement, scrollSpeed);
    }
  };

  return (
    <div className="fixed w-full bg-black/20 inset-0 h-screen flex flex-col items-end lg:hidden">
      <motion.div
        className="lg:hidden gap-4 text-background font-bold flex flex-col bg-white w-3/4 sm:w-3/6 md:w-2/5 h-full relative mt-0 p-12"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <button
          className="flex lg:hidden text-background text-4xl hover:text-red-500 absolute top-5 right-5"
          onClick={toggleModal}
        >
          <IoMdClose />
        </button>
        {navs.map((nav, idx) => (
          <Link key={idx} href={nav.link}>
            <span
              className={clsx(
                "cursor-pointer",
                activeSection === nav.link.slice(1) ? "text-accent" : ""
              )}
              onClick={() => {
                scrollTo(nav.link);
                toggleModal();
              }}
            >
              {nav.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default NavModal;
