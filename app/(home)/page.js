import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      {/* <Reviews /> */}
      <Contact />
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://portfolio-backend-seven-kappa.vercel.app/api/about"
//   );
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
