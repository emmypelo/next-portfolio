import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";

import banner from "../public/images/logo.png";
import ProjectCard from "./ProjectCard";

const PreviousProjects = () => {
  return (
    <div className="wrapper w-full" id="projects">
      <Title text={"Previous-Projects"} icon={<FaProjectDiagram />} />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ">
        <ProjectCard link={"#"} image={banner} title={"My Blog"} />

        <ProjectCard link={"#"} image={banner} title={"Calculator"} />

        <ProjectCard link={"#"} image={banner} title={"Currency Converter"} />

        <ProjectCard link={"#"} image={banner} title={"Weather Today"} />
      </div>
    </div>
  );
};

export default PreviousProjects;
