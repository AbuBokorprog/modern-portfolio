import { getSingleBlogs } from '@/components/serversideData/portfolio';
import moment from 'moment';
import Image from 'next/image';
import { FaCalendarAlt, FaFolder } from 'react-icons/fa';

export default async function Page({ params }) {
  const id = (await params).id;
  const blog = await getSingleBlogs(id);
  const { title, description, thumbnail, category, createdAt } = blog?.data;

  return (
    <article className="container mx-auto px-4 lg:px-20 py-12 mt-20">
      {/* Hero Section */}
      <div className="space-y-8 mb-16">
        <div className="space-y-4">
          {/* Category and Date */}
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            {category?.map((c) => (
              <div className="flex items-center gap-2" key={c}>
                <FaFolder className="text-rose-600 dark:text-rose-500" />
                <span>{c}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-rose-600 dark:text-rose-500" />
              <time>{moment(createdAt).format('MMMM DD, YYYY')}</time>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-500 dark:to-rose-500 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={thumbnail}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
        <div
          className="text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Share Section */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-semibold mb-4">Share this article</h3>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Twitter
          </button>
          <button className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
            Facebook
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}

// Add metadata for SEO
export async function generateMetadata({ params }) {
  const id = (await params).id;
  const blog = await getSingleBlogs(id);
  const { title, description, thumbnail } = blog?.data;

  return {
    title: title,
    description: description.slice(0, 160),
    openGraph: {
      title: title,
      description: description.slice(0, 160),
      images: [thumbnail],
    },
  };
}
