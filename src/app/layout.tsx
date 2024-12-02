import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
	title: "Portfolio | Aphrodis Uwineza",
	description:
		"Showcasing skills, projects, and expertise in full-stack development.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable}`}>
				<header>
					<NavbarComponent />
				</header>
				<main role="main">{children}</main>
				<footer>
					<FooterComponent />
				</footer>
			</body>
		</html>
	);
}
