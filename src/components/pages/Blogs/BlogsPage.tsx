import { useState } from "react";
import dynamic from "next/dynamic";
import BlogsCard from "./components/BlogsCard";
import { myBlogs } from "@/utils/blogs";
import Modal from "./components/Modal";
import "react-multi-carousel/lib/styles.css";
import { CustomNextButton, CustomPrevButton } from "./components/CustomButtons";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

interface MyBlogsProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const BlogsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<MyBlogsProps | null>(null);

  const toggleModal = (
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
      className="bg-foreground py-10 relative px-[7%] lg:px-[10%] mx-auto"
      id="blogs"
    >
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        customLeftArrow={<CustomPrevButton />}
        customRightArrow={<CustomNextButton />}
      >
        {myBlogs.map((blog: MyBlogsProps) => (
          <div key={blog.id} className="p-4">
            <BlogsCard
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              toggleModdle={() =>
                toggleModal(blog.id, blog.title, blog.description, blog.image)
              }
            />
          </div>
        ))}
      </Carousel>

      {openModal && modalData && (
        <Modal
          id={modalData.id}
          title={modalData.title}
          description={modalData.description}
          image={modalData.image}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default BlogsPage;
