const AboutSection = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="w-full">
				<div className="w-[32rem] h-[32rem]">
					<img
						src="/aboutImage.png"
						alt="About_image"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			<div className="w-full">
				<h1 className="text-[3rem] font-bold text-white">
					About <b className="text-accent">Me</b>
				</h1>
				<div className="flex flex-col gap-2">
					<p className="text-xl font-semibold text-white">
						I thrive on turning ideas into interactive and user-friendly
						experiences. My journey in the world of web development has been an
						exciting adventure of constant learning and creating.
					</p>
					<p className="text-xl font-semibold text-white">
						From crafting responsive layouts to implementing state-of-the-art
						features, I enjoy the challenges that come with building modern and
						dynamic web applications
					</p>
				</div>
				<div>
					<button>Contact me</button>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
