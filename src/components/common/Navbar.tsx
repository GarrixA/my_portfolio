"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { navs } from "@/utils/data";
import NavModal from "./modal/NavModal";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
    <div
      className={`h-16 sm:h-20 2xl:h-24 w-full bg-background flex items-center justify-between px-[10%] m-auto fixed z-50  transition-all duration-1000 ${
        isScrolled ? "bg-muted" : ""
      }`}
    >
      <div>
        <Image
          width={10}
          height={10}
          alt="logo"
          src={Logo}
          className="w-full h-full"
        />
      </div>
      <button
        className="flex lg:hidden text-white text-2xl"
        onClick={() => toggleModal()}
      >
        <LuMenu />
      </button>

      <AnimatePresence>
        {modal && <NavModal toggleModal={toggleModal} />}
      </AnimatePresence>

      <div className="lg:flex items-center gap-4 text-white font-bold hidden">
        {navs.map((nav, idx) => (
          <Link key={idx} href={nav.link}>
            <span
              className={clsx(
                "cursor-pointer",
                activeSection === nav.link.slice(1) ? "text-accent" : ""
              )}
              onClick={() => scrollTo(nav.link)}
            >
              {nav.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
