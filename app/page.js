import About from '@/components/about';
import Banner from '@/components/banner';
import Blogs from '@/components/blogs';
import Contact from '@/components/contact';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Portfolio from '@/components/portfolio';
// import Reviews from '@/components/reviews';
import {
  getAbout,
  getBlogs,
  getEducation,
  getExperience,
  getProjects,
  getSkills,
} from '@/components/serversideData/portfolio';
import React from 'react';

export default async function page() {
  const aboutData = await getAbout();
  const skillData = await getSkills();
  const blogsData = await getBlogs();
  const educationData = await getEducation();
  const experienceData = await getExperience();
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
    <div>
      <Banner />
      <About
        aboutData={aboutData?.data && aboutData?.data[0]}
        skillData={skillData?.data}
      />
      <Education educationData={educationData} />
      {/* experience */}
      <Experience experienceData={experienceData} />
      <Portfolio
        projects={projectsData?.data}
        frontend={frontend}
        full={full}
        mern={mern}
      />
      <Blogs blogs={blogsData} />
      {/* <Reviews /> */}
      <Contact />
    </div>
  );
}
