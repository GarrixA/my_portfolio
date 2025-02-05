import Image from "next/image";

interface ModalProps {
  id: number;
  title: string;
  description: string;
  image: string;
  toggleModal: (
    id: number,
    title: string,
    description: string,
    image: string
  ) => void;
}

const Modal = ({ id, title, description, image, toggleModal }: ModalProps) => {
  console.log(
    `Id is: ${id}\n`,
    `Title is: ${title}\n`,
    `Description is: ${description}\n`,
    `Image is: ${image}`
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-4/5 bg-white rounded-lg shadow-lg overflow-hidden flex relative mt-20">
        <div className="relative w-full h-60 sm:h-72 md:h-[80vh]">
          <Image
            src={image}
            alt="blog-image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-6 max-h-[70vh] overflow-auto mt-4 w-full relative">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
        <button
          onClick={() => toggleModal(id, title, description, image)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
