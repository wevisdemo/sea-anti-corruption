import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Open Data for Anti Corruption",
  description: "Open Data for Anti Corruption",
  metadataBase: new URL("https://opendataforanticorruption.com"),
  openGraph: {
    title: "Open Data for Anti Corruption",
    description: "Open Data for Anti Corruption",
    images: [
      {
        url: "/img/OG.jpg",
        width: 1200,
        height: 630,
        alt: "Open Data for Anti Corruption",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Data for Anti Corruption",
    description: "Open Data for Anti Corruption",
    images: ["/img/OG.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="opendataforanticorruption.com"
          src="https://analytics.punchup.world/js/script.js"
        ></script>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
