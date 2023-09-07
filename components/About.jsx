import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const About = () => {
  return (
    <div className="wrapper" id="about">
      <Title text ='About me' icon = {<SiInformatica/>}/>
      <div className=" flex flex-col gap-4">
        <p>
        I'm a passionate MERN developer with a flair for crafting dynamic web applications. Proficient in JavaScript and the MERN stack, I thrive on turning innovative ideas into functional, user-friendly digital solutions. With a keen eye for design and a knack for problem-solving, I'm dedicated to creating seamless online experiences that captivate and engage users.
        </p>
        <p>
          Engage me for your services and you will get the best.
        </p>
      </div>
    </div>
  );
};

export default About;
