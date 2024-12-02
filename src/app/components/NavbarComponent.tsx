import Link from "next/link";
import Image from "next/image";

const NavbarComponent = () => {
	const navItems = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Skills", id: "skills" },
		{ name: "Portfolio", id: "portfolio" },
		{ name: "Blogs", id: "blogs" },
		{ name: "Login", id: "login" },
	];

	return (
		<nav className="flex items-center justify-between px-[8%] py-2 gap-2 fixed w-full z-10 bg-primary text-white">
			<div>
				<Image src="/Logo.png" alt="Navigation Logo" width={200} height={50} />
			</div>
			<div className="flex items-center gap-4 text-lg font-bold">
				{navItems.map((nav, idx) => (
					<Link href={`#${nav.id}`} key={idx}>
						<span className={`${nav.name === "Login" ? "pl-16" : ""}`}>
							{" "}
							{nav.name}{" "}
						</span>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default NavbarComponent;
