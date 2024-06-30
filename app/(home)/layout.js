import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Provider from "@/provider/contextProvider";
import Home from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abu Bokor || Front-End Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto bg-white dark:bg-black`}
      >
        <Home>
          <Provider>
            <div>
              <Navbar />
            </div>
            {children}
            <Footer />
          </Provider>
        </Home>
      </body>
    </html>
  );
}
