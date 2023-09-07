import React from "react";
import Title from "./Title";
import { MdWork } from "react-icons/md";

import ExperienceCard from "./ExperienceCard";
import { SiReactivex } from "react-icons/si";

const Experience = () => {
  return (
    <div className="wrapper" id="experience">
      <Title text="Experience" icon={<MdWork />} />

      <div className=" grid grid-cols-1 md:grid-cols-3  gap-2">
      <ExperienceCard
          title="Bovas"
          subTitle="Project  Manager"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="Project Manager"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="Upwork"
          subTitle="Web Developer"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="LeoKonsult"
          subTitle="Internship"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="FIverr"
          subTitle="Front End Developer"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="RCC"
          subTitle="Project Manager"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Pektej"
          subTitle="Commercial  Manager"
          icon={<SiReactivex />}
        />

        
      </div>
    </div>
  );
};

export default Experience;
