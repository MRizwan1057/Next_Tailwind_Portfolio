import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rizwan | Next JS Portfolio",
  description: "Rizwan | Next JS & Tailwind CSS Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="dark">
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
