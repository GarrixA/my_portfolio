"use client";

import AboutPage from "@/components/pages/AboutPage/AboutPage";
import BlogsPage from "@/components/pages/Blogs/BlogsPage";
import ContactsPage from "@/components/pages/Contacts/ContactsPage";
import HomePage from "@/components/pages/HomePage/HomePage";
import PortfolioPage from "@/components/pages/Portfolio/PortfolioPage";
import Faq from "@/components/pages/QA/Faq";
import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
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

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="flex flex-col text-white">
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="skills">
        <SkillsPage />
      </section>
      <section id="portfolio">
        <PortfolioPage />
      </section>
      <section id="blogs">
        <BlogsPage />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="contacts">
        <ContactsPage />
      </section>
    </main>
  );
}
