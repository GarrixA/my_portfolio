import AboutPageComponent from "./components/AboutPageComponent";

const AboutPage = () => {
  return (
    <div
      className="lg:h-screen bg-background flex items-center justify-center px-[7%] lg:px-[10%] mx-auto"
      id="about"
    >
      <AboutPageComponent />
    </div>
  );
};

export default AboutPage;
