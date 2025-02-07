interface SkillsProps {
  name: string;
  percent: number;
}

const SkillsComponent = () => {
  const skills: SkillsProps[] = [
    { name: "Figma", percent: 90 },
    { name: "HTML 5", percent: 95 },
    { name: "CSS 3", percent: 85 },
    { name: "Tailwind CSS", percent: 88 },
    { name: "JavaScript", percent: 85 },
    { name: "TypeScript", percent: 85 },
    { name: "React.js", percent: 90 },
    { name: "Next.js", percent: 90 },
    { name: "Node.js", percent: 70 },
    { name: "Drizzle ORM", percent: 60 },
    { name: "Sequelize ORM", percent: 75 },
    { name: "Git", percent: 97 },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-center text-3xl lg:text-5xl font-bold">
          My <b className="text-accent/90">Technical</b> Skills
        </h1>
        <p className="text-base lg:text-xl my-2 2xl:text-2xl">
          My goal is to build a modern web application utilizing HTML, CSS, and
          modern front-end frameworks and libraries for interactive user
          experiences, Tailwind CSS for efficient styling, MongoDB and
          PostgreSQL for robust data storage, and Node.js with Express for
          backend server functionality, ensuring seamless performance and
          scalability.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-2 gap-x-10">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex items-center 2xl:text-xl relative">
              <h1>{skill.name}</h1>
              <h1
                className="absolute"
                style={{
                  marginLeft: `${skill.percent - 1}%`,
                }}
              >
                {skill.percent}%
              </h1>
            </div>
            <div className="bg-white h-3 w-full rounded-r-3xl rounded-l-3xl overflow-hidden mt-1">
              <div
                className={`h-full bg-accent rounded-r-3xl`}
                style={{
                  width: `${skill.percent}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
