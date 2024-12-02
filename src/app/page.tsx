"use client";

import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen items-center justify-between relative bg-background px-[8%]">
			<div className="w-full min-h-screen">
				<div>
					<section
						className="h-screen flex items-center bg-background text-black"
						id="home"
					>
						<HeroSection />
					</section>
					<section
						className="h-screen bg-background text-white scroll-mt-28"
						id="about"
					>
						<AboutSection />
					</section>
					<section
						className="h-screen bg-background text-white scroll-mt-28"
						id="skills"
					>
						<SkillsSection />
					</section>
					<section
						className="h-[60vh] bg-background text-white scroll-mt-10"
						id="portfolio"
					>
						Portfolio
					</section>
					<section
						className="h-[60vh] bg-background text-white scroll-mt-10"
						id="projects"
					>
						Projects
					</section>
					<section
						className="h-[60vh] bg-background text-white scroll-mt-10"
						id="login"
					>
						Login
					</section>
				</div>
			</div>
		</main>
	);
}
