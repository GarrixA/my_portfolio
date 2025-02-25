import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aphrodis developer",
  description: "Aphrodis Uwineza",
  icons: {
    icon: "/code_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="author" content="Aphrodis Uwineza" />
        <meta property="og:title" content="Aphrodis Developer Portfolio" />
        <meta
          property="og:description"
          content="Aphrodis Uwineza - Web Developer"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
