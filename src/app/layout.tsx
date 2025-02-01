import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Aphrodis developer",
	description: "Aphrodis Uwineza",
	icons: "/code_icon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="Aphrodis" content={metadata.description || ""}/>
			<link rel="icon" href={String(metadata?.icons)}/>
			<title>{String(metadata.title)}</title>
			<body className={`bg-whie text-black`}>
				<Navbar/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
