import Image from "next/image";

interface ShowCardsProps {
  image: string;
  title: string;
}

const ShowCards = ({ image, title }: ShowCardsProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-red-500 h-64 w-40 relative">
        <h1 className="absolute top-0 left-0 z-10 bg-muted w-full text-base font-bold p-2">
          {title}
        </h1>
        <div className="w-full h-full relative">
          <div className="h-full w-full absolute inset-0 bg-black/50"></div>
          <Image
            width={168}
            height={250}
            alt="image"
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCards;
