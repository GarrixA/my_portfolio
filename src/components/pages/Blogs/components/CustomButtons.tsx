import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CustomButtonProps {
  onClick?: () => void;
}

export const CustomPrevButton = ({ onClick }: CustomButtonProps) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
  >
    <BsArrowLeft size={24} />
  </button>
);

export const CustomNextButton = ({ onClick }: CustomButtonProps) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
  >
    <BsArrowRight size={24} />
  </button>
);
