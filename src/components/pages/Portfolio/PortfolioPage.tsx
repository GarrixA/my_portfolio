import PortfolioComponents from "./components/PortfolioComponents";

const PortfolioPage = () => {
  return (
    <div
      className="flex items-center justify-center bg-background lg:h-screen px-[5%] lg:px-[10%] mx-auto py-10 lg:py-0"
      id="portfolio"
    >
      <PortfolioComponents />
    </div>
  );
};

export default PortfolioPage;
