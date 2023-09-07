import Image from 'next/image';
import banner from '../public/images/banner.jpg'

const Banner = () => {
  return (
    <div className=" px-2 flex mx-auto flex-col items-center md:flex-row  gap-8 wrapper mt-9">

      {/* Image-banner */}
      <div className="w-44 h-44">
        <Image src={banner} alt='my profile image' className='w-full h-full rounded-full border-[1px] border-indigo-900 p-2 object-cover' />
      </div>
      {/* Description */}
      <div className=" w-3/4 flex flex-col gap-2 text-center md:text-left">
        <h1 className='text-3xl bold  text-white'>Emmanuel Ogunleye</h1>
        <h3 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wider'>Fullstack Web Developer</h3>
        <p className='text-base tracking-wide'>"Experienced full-stack developer specializing in building dynamic web applications"</p>
      </div>
    </div>
  );
};

export default Banner;
