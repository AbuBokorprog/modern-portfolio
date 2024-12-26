import { getSingleProjects } from '@/components/serversideData/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import moment from 'moment';

export default async function Page({ params }) {
  const id = (await params).id;
  const portfolio = await getSingleProjects(id);
  const {
    skills,
    _id,
    view_url,
    github_url,
    short_description,
    projects_name,
    thumbnail,
    completion_date = '2024',
    duration = '2 months',
    key_features = [
      'Responsive Design',
      'User Authentication',
      'Real-time Updates',
      'Dark Mode Support',
    ],
    challenges = 'One of the main challenges was implementing real-time updates while maintaining optimal performance...',
  } = portfolio?.data;

  return (
    <article className="container mx-auto text-black dark:text-white px-4 lg:px-20 py-12 mt-20">
      {/* Hero Section */}
      <div className="space-y-8 mb-16">
        <div className="space-y-4">
          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent">
            {projects_name}
          </h1>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-rose-600 dark:text-rose-500" />
              <span>{moment(completion_date).format('MMMM YYYY')}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiTime className="text-rose-600 dark:text-rose-500" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={thumbnail}
            alt={projects_name}
            fill
            priority
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          href={view_url}
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-rose-600 hover:from-fuchsia-700 hover:to-rose-700 text-white rounded-xl transition-all duration-300"
        >
          <FaExternalLinkAlt />
          <span>Live Demo</span>
        </Link>
        <Link
          href={github_url}
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all duration-300"
        >
          <FaGithub />
          <span>Source Code</span>
        </Link>
      </div>

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div
              className="text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: short_description }}
            ></div>
          </section>

          {/* Key Features */}
          {key_features && key_features?.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="spacey-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                {key_features.map((feature, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                  >
                    {feature}
                  </li>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions */}
          {challenges && challenges?.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              {challenges.map((challenge, index) => (
                <li key={index} className=" ">
                  {challenge}
                </li>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Technologies Used */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

// Add metadata for SEO
export async function generateMetadata({ params }) {
  const id = (await params).id;
  const portfolio = await getSingleProjects(id);
  const { projects_name, short_description, thumbnail } = portfolio?.data;

  return {
    title: projects_name,
    description: short_description.slice(0, 160),
    openGraph: {
      title: projects_name,
      description: short_description.slice(0, 160),
      images: [thumbnail],
    },
  };
}
