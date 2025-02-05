import Image from "next/image";

interface MyBlogsProps {
  title: string;
  description: string;
  image: string;
  id: number;
  toggleModdle: (id: number) => void;
}

const BlogsCard = ({
  id,
  title,
  description,
  image,
  toggleModdle,
}: MyBlogsProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-10px]">
      <div className="w-full h-52">
        <Image
          alt="blog-image"
          width={364}
          height={364}
          src={image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-2 text-base">
          {description.length > 70
            ? description.slice(0, 70) + "..."
            : description}
        </p>
        <button
          className="mt-6 px-6 py-2 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-all w-full"
          onClick={() => toggleModdle(id)}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
