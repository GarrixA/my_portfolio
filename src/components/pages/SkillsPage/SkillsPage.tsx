import SkillsComponent from "./components/SkillsComponent";

const SkillsPage = () => {
  return (
    <div
      className="lg:h-screen py-10 lg:py-0 bg-foreground flex items-center justify-center px-[7%] lg:px-[10%] mx-auto"
      id="skills"
    >
      <SkillsComponent />
    </div>
  );
};

export default SkillsPage;
