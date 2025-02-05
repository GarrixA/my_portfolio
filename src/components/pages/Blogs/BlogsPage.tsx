import { useState } from "react";
import BlogsCard from "./components/BlogsCard";
import { myBlogs } from "@/utils/blogs";
import Modal from "./components/Modal";

interface MyBlogsProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BlogsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<MyBlogsProps | null>(null);
  const toggleModdle = (
    id: number,
    title: string,
    description: string,
    image: string
  ) => {
    setOpenModal(!openModal);
    setModalData({ id, title, description, image });
  };

  return (
    <div
      className="flex items-center justify-center bg-foreground h-screen px-[10%] mx-auto gap-5"
      id="blogs"
    >
      {myBlogs.slice(0, 3).map((blog: MyBlogsProps, idx: number) => (
        <BlogsCard
          key={idx}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          toggleModdle={() =>
            toggleModdle(blog.id, blog.title, blog.description, blog.image)
          }
        />
      ))}
      {openModal && modalData && (
        <Modal
          id={modalData?.id}
          title={modalData?.title}
          description={modalData?.description}
          image={modalData?.image}
          toggleModal={toggleModdle}
        />
      )}
    </div>
  );
};

export default BlogsPage;
