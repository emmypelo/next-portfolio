import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="wrapper" id="skills">
      <Title text={"Skills"} icon={<GiSkills />} />
      <div
        className="grid grid-cols-2 gap-4 md:grid-cols-4
        "
      >
        <SkillCard title={"Javascript"} />
        <SkillCard title={"React JS"} />
        <SkillCard title={"MongoDB"} />
        <SkillCard title={"ExpressJS"} />
        <SkillCard title={"NodeJS"} />
        <SkillCard title={"Bootstrap"} />
        <SkillCard title={"TailwindCSS"} />
        <SkillCard title={"MS Excel"} />
        <SkillCard title={"AutoCAD"} />
        <SkillCard title={"Planswift"} />
      </div>
    </div>
  );
};

export default Skills;
