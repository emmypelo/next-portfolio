const ExperienceCard = ({title, subTitle, icon}) => {
  return (
    <div className=" flex items-center gap-2">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
          <span className="xl"> {icon}</span>
      </span>
      <div className="flex flex-col p-2">
        <h3 className="text-xl text-gray-400">{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
