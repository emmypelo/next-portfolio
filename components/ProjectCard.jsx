import Image from "next/image";

const ProjectCard = ({ link, image, title }) => {
  return (
    <div className="mt-2">
      <a href={link} target="_blank">
        <div className="w-full h-50  md:h80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
          <Image
            className="object-cover translate-y-0 group-hover:-translate-y-[5%] transition-transform duration-300"
            src={image}
            alt="placeholder"
            // width={350}
            // height={350}
          />
          <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
