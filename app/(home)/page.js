import About from '@/components/about';
import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Portfolio from '@/components/portfolio';
// import Reviews from "@/components/reviews";
import {
  getAbout,
  getProjects,
  getSkills,
} from '@/components/serversideData/portfolio';
import React from 'react';

export default async function page() {
  const aboutData = await getAbout();
  const skillData = await getSkills();

  const projectsData = await getProjects();
  const frontend = projectsData?.data?.filter(
    (p) => p?.categoryId?.category_name == 'Frontend'
  );
  const mern = projectsData?.data?.filter(
    (p) => p?.categoryId?.category_name == 'MERN stack'
  );
  const full = projectsData?.data?.filter(
    (p) => p?.categoryId?.category_name == 'Full stack'
  );

  return (
    <div className="dark:right left">
      <Banner />
      <About
        aboutData={aboutData?.data && aboutData?.data[0]}
        skillData={skillData?.data}
      />
      <Portfolio
        projects={projectsData?.data}
        frontend={frontend}
        full={full}
        mern={mern}
      />
      {/* <Reviews /> */}
      <Contact />
    </div>
  );
}
