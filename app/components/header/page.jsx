'use client'; // Ensure this is at the very top of the file

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import close icon
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Tracks scroll position
  const [isVisible, setIsVisible] = useState(true); // Controls header visibility
  const [lastScrollPos, setLastScrollPos] = useState(0); // Tracks the last scroll position
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to the home page and scroll to a specific section
  const scrollToSection = (section) => {
    if (router.pathname !== '/') {
      router.push(`/#${section}`);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        setIsScrolled(false); // Reset to default when at the top
        setIsVisible(true);
      } else if (currentScrollPos > lastScrollPos) {
        setIsScrolled(true); // Scrolled down
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsScrolled(true); // Scrolled up but not to the top
        setIsVisible(true); // Show header when scrolling up
      }

      setLastScrollPos(currentScrollPos); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
  // <div className="relative w-full h-full">
  <header
  className={`fixed w-full m-auto top-0 z-50 transition-transform duration-300 bg-[#87A2FF] ease-in-out ${
    isScrolled ? 'py-0 lg:py-2' : 'py-2 lg:py-4 '
  } `}
>
  <div className="flex items-center justify-around">
    {/* Logo Section */}
    <Image
      src="/images/vrseclogo.png"
      alt="VRSEC Logo"
      width={isScrolled ? 130 : 140}
      height={isScrolled ? 130 : 140}
      className="rounded-full object-contain transition-all duration-300"
      loading="lazy"
    />
    <div
      className={`lg:block lg:text-center transition-all duration-300 ease-in-out ${
        isScrolled ? 'text-base lg:text-2xl' : 'text-xl lg:text-3xl'
      }`}
    >
      <h2 className={`font-bold text-[#16325B]`}>
        Velagapudi Ramakrishna<br />
        Siddhartha Engineering College
      </h2>
      <h2
        className={`text-sm font-normal ${
          isScrolled ? 'text-xs lg:text-lg text-[#16325B]' : 'text-lg lg:text-xl text-[#16325B]'
        }`}
      >
        (Deemed to be University)
        <br />
        Kanuru, Vijayawada, Andhra Pradesh, 520007.
      </h2>
    </div>

    {isScrolled  && (
      <div className="hidden items-center justify-center gap-16 lg:flex my-2">
        <div className="items-center text-center flex-col">
          <h2 className="font-bold text-white text-xs lg:text-2xl">
            8<sup>th</sup> International Conference on Intelligent Computing and
            <br />
            Communication ICICC-2025
          </h2>
          <h2 className="text-sm text-[#112D32] font-bold text-xs lg:text-base">
            25<sup>th</sup> & 26<sup>th</sup> July - 2025
            <br />
            Organized by: Department of Information Technology & Computer Science Engineering
          </h2>
        </div>
      </div>
    )}



          <div
  className={`flex items-center ${isScrolled ? "flex justify-evenly space-x-5" : "justify-evenly space-x-5"}`}>
  {/* First set of images */}
  <div className={`flex ${isScrolled ? "items-center flex-col space-y-5" : "items-center justify-evenly space-x-5"}`}>
    <div className="hidden lg:block">
      <Image
        src="/images/springer2.png"
        alt="Springer"
        width={isScrolled ? 100 : 140}
        height={isScrolled ? 100 : 80}
        className="bg-white/90 rounded-lg object-fill"
      />
    </div>
    <div className="hidden lg:block">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfIkiMHtEZmhUmWnvIfSEXP3cPOnYSL_gnucq1KEYNuErxA_zPfdedSAU7u-GRiFvpRM&usqp=CAU"
        alt="NIRF"
        width={isScrolled ? 100 : 140}
        height={isScrolled ? 100 : 80}
        className="bg-white/90 rounded-lg object-fill"
      />
    </div>
  </div>

  {/* Second set of images */}
  <div className={`flex item-center ${isScrolled ? "items-center flex-col space-y-5" : "items-center justify-evenly space-x-5"}`}>
    <div className="hidden lg:block">
      <Image
        src="data:image/jpeg;base64,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"
        alt="nba"
        width={isScrolled ? 100 : 140}
        height={isScrolled ? 100 : 80}
        className="bg-white/90 rounded-lg object-fill"
      />
    </div>
    <div className="hidden lg:block">
      <Image
        src="/images/naac-a.jpg"
        alt="naac"
        width={isScrolled ? 100 : 140}
        height={isScrolled ? 100 : 80}
        className="bg-white/90 rounded-lg object-fill"
      />
    </div>
  </div>
</div>

          
          <div className="lg:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-xl cursor-pointer z-50 absolute right-6 top-8" /> 
          ) : (
            <FaBars onClick={toggleMenu} className="text-xl cursor-pointer absolute right-6 top-8"/>
          )}
        </div>
      </div>

      <div className={`hidden item-center justify-center gap-16 lg:flex my-2`}>
        <div className={` items-center text-center flex ${isScrolled ? 'hidden' : 'lg:block'}`}>
          <h2 className={`font-bold text-3xl  text-white  ${isScrolled ? 'text-xs lg:text-2xl' : 'text-xl lg:text-4xl'}`}>
            8<sup>th</sup>   International Conference on Intelligence Computing and <br />Communication ICICC-2025 
            </h2>
            <h2 className={`text-sm text-[#112D32] font-bold ${isScrolled ? 'text-xs lg:text-base' : 'text-lg lg:text-xl'}`}>
            25<sup>th</sup> & 26<sup>th</sup> July - 2025<br></br>
            Organized by: Department of Information Technology
          </h2>
        </div>
      </div>
      
  
      <nav
          className={`lg:hidden fixed inset-0 w-full h-screen bg-[#FFDC7F] text-black text-xl flex flex-col items-center justify-center space-y-6 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:translate-x-0`}
        >
        <ul className="space-y-6 text-center ">
        <li><Link
        href="/"
        className="" onClick={toggleMenu}>
      Home
      </Link>
      </li>
      <li><Link
      href="/call_for_papers"
      className="" onClick={toggleMenu}>
        Call for papers
        </Link></li>

        <li><Link
          href="/important_dates"
          className="" onClick={toggleMenu}>
          Important Dates
        </Link></li>
        <li><Link
          href="/committees"
          className="" onClick={toggleMenu}>
          Committees
        </Link></li>
        <li><Link
          href="/author_info"
          className="" onClick={toggleMenu}>
          Author Info
        </Link></li>
        <li><Link
          href="/schedule"
          className="" onClick={toggleMenu}>
          Tracks & Schedule
        </Link></li>
        <li><Link
          href="/speakers"
          className="" onClick={toggleMenu}>
          Guests & Speakers
        </Link></li>
        <li><Link
          href="/contact_us"
          className="" onClick={toggleMenu}>
          Contact Us
        </Link></li>
        <li><Link
          href="/vij_attractions"
          className="" onClick={toggleMenu}>
          Vijayawada Attractions
        </Link></li>
        </ul>
      </nav>

      {/* Desktop Navigation Menu */}
      <nav className={`hidden lg:flex justify-evenly px-24 ${isScrolled ? 'lg:mt-0 ' : 'lg:mt-4 '} bg-[#FFF4B5]`}>
      <Link
        href="/#home"
        className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
      Home
      </Link>
      <Link
      href="/call_for_papers"
      className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
        Call for Papers
        </Link>

        <Link
          href="/important_dates"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Important Dates
        </Link>
        <Link
          href="/committees"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Committees
        </Link>
        <Link
          href="/author_info"
          className={`cursor-pointer m-0.5    border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
          Author Info
        </Link>
        <Link
          href="/schedule"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
        Tracks & Schedule
        </Link>
        <Link
          href="/speakers"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Guests & Speakers
        </Link>
        <Link
          href="/contact_us"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Contact Us
        </Link>
        
        <Link
          href="/vij_attractions"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-2' : 'text-sm py-1 px-2'} hover:bg-[#FF6600]/15  hover:text-black hover:shadow-lg`}
        >
         Vijayawada Attractions
        </Link>
      </nav>
    </header>
      // </div>
  );
};

export default Header;
