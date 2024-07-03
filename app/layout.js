import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estacy Travels | Your Trusted Travel and Birth Companion",
  description: "Explore the best travel packages and professional birth services with Estacy Travels. Your trusted partner in creating memorable journeys and safe birth experiences.",
  keywords: "travel agency, birth services, travel packages, professional birth assistance, Estacy Travels, safe birth experiences, memorable journeys, travel and birth companion",
  author: "Estacy Travels",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  og: {
    title: "Estacy Travels | Your Trusted Travel and Birth Companion",
    description: "Explore the best travel packages and professional birth services with Estacy Travels. Your trusted partner in creating memorable journeys and safe birth experiences.",
    type: "website",
    url: "https://www.estacytravels.com",
    image: "/images/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EstacyTravels",
    title: "Estacy Travels | Your Trusted Travel and Birth Companion",
    description: "Explore the best travel packages and professional birth services with Estacy Travels. Your trusted partner in creating memorable journeys and safe birth experiences.",
    image: "/images/logo.png",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
