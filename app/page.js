import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import PreviousProjects from "@/components/PreviousProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-[100%] bg-gray-950 text-gray-300  ">
      <div className=" w-[95%] my-0 mx-auto max-w-screen-xl md:pt-10">
        <Banner />
        <About/>
        <Experience/>
        <Skills/>
        <PreviousProjects/>
        <Contact/>
      </div>
    </main>
  );
}
