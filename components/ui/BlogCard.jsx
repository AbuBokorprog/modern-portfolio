import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
  const { title, description, thumbnail, category, createdAt, _id } = blog;

  return (
    <Link
      href={`/blogs/${_id}`}
      className=" rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={500}
          className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
        />

        <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {category[0]}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
        <div
          className="text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: description?.slice(0, 100) }}
        ></div>

        <div className="flex items-center justify-between">
          <span className="text-sm ">
            {moment(createdAt).format('MM DD YYYY')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
