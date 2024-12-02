import Image from "next/image";
import React from "react";

const HeroSection = () => {
	return (
		<div>
			<div className="flex items-center">
				<div className="w-full flex flex-col gap-2">
					<span className="text-accent text-2xl">Hello, Welcome!</span>
					<h1 className="text-white font-bold text-[3rem]">
						I am Aphrodis Uwineza
					</h1>
					<p className="text-white font-semibold text-xl">
						A versatile Full Stack Developer skilled in both front-end and
						back-end technologies. Adept at building responsive web
						applications, managing databases, and deploying scalable solutions.
						Passionate about continuous learning and collaborative
						problem-solving.
					</p>
					<div className="mt-4">
						<button className="text-lg font-semibold bg-accent px-8 py-2 rounded text-white">
							Contact Me
						</button>
					</div>
				</div>
				<div className="w-full p-2 flex items-center justify-end">
					<div className="w-96 h-96 rounded-lg overflow-hidden">
						<img
							src={"/homeImage.png"}
							alt="Home_image"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
