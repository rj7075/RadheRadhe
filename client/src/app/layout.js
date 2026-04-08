// /app/layout.js
import Navbar from "@/common/Navbar";
import "./globals.css";
import Footer from "@/common/Footer";


export const metadata = {
  title: "PG Finder",
  description: "Find best PG accommodations in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}