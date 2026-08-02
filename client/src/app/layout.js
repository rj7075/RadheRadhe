// /app/layout.js
import Navbar from "@/common/Navbar";
import "./globals.css";
import Footer from "@/common/Footer";
import { Toaster } from "react-hot-toast";
import FloatingContact from "@/common/FloatingContact";


export const metadata = {
  title:
    "PG Finder Gurgaon | Best PG in Sector 48, Sohna Road, Badshahpur Near Genpact",

  description:
    "PG Finder helps you discover the best PG in Gurgaon near Sector 48, Sohna Road, Badshahpur, Genpact, Vatika Chowk & Subhash Chowk. Find verified boys, girls & unisex PG with food, WiFi & zero brokerage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}