import About from "@/components/about";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      <Reviews />
      <Footer />
    </div>
  );
}
