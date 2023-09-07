"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react'; // Added useEffect and useRef
import { MdMenu, MdClose } from 'react-icons/md';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  useEffect(() => {
    // Add event listener to close the navbar when clicking outside of it
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbar(false);
      }
    }

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setNavbar(false); // Close the mobile menu after clicking a link
  };

  return (
    <div>
      <nav ref={navbarRef} className={`w-full bg-gray-800 text-gray-300 fixed top-0 left-0 right-0 z-10 md:h-[50px] ${navbar ? 'h-[300px]' : ''}`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-left justify-between py-3 md:py-1 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">EMMANUEL</h2>
              </Link>
            {/* MENU and CLOSE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <MdClose  className="focus:border-none active:border-none text-white text-2xl" />
                  ) : (
                    <MdMenu
                      className="focus:border-none active:border-none text-white text-2xl"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-1  md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-1 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className=" md:h-auto items-left justify-left md:flex ">
                <li className="navList">
                  <ScrollLink to="about" smooth={true} duration={500} onClick={scrollToTop}>
                    About
                  </ScrollLink>
                </li>
                <li className="navList">
                  <ScrollLink to="experience" smooth={true} duration={500} onClick={scrollToTop}>
                    Experience
                  </ScrollLink>
                </li>
                <li className="navList">
                  <ScrollLink to="skills" smooth={true} duration={500} onClick={scrollToTop}>
                    Skills
                  </ScrollLink>
                </li>
                <li className="navList">
                  <ScrollLink to="projects" smooth={true} duration={500} onClick={scrollToTop}>
                    Projects
                  </ScrollLink>
                </li>

                <li className="navList">
                  <ScrollLink to="contact" smooth={true} duration={500} onClick={scrollToTop}>
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
