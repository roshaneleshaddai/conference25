'use client';  // Ensure this is at the very top of the file

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import close icon
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
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

  // Add event listener to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);  // When scrolled past 100px, set to true
      } else {
        setIsScrolled(false); // Otherwise, set to false
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  // <div className="relative w-full h-full">
    <header className={`fixed w-full top-0 z-50 h-30 transition-all duration-300 ease-in-out  bg-[#78B7D0] ${isScrolled ? 'py-0 md:py-2' : 'py-2 md:py-4'}`}>
    {/* <video
      
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/images/bg.mp4" type="video/mp4" />
    </video> */}
      <div className="flex items-center justify-around md:p-2 md:mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center justify-around space-x-0 md:space-x-4">
          <Image
              src="/images/vrseclogo.png"
              alt="VRSEC Logo"
              width={isScrolled ? 100 : 140}
              height={isScrolled ? 100 : 140}
              className="rounded-full object-contain transition-all duration-300"
              loading="lazy"
          />
          <div className={`md:block md:text-center transition-all duration-300 ease-in-out ${isScrolled ? 'text-xs md:text-2xl ' : 'text-xl md:text-4xl'}`}>

            <h2 className={`font-bold ${isScrolled ? 'text-[#16325B] ' : 'text-white'} `}>
              Velagapudi Ramakrishna Siddhartha Engineering College
            </h2>
            <h2 className={`text-sm    font-normal ${isScrolled ? 'text-xs md:text-base text-[#16325B] ' : 'text-lg md:text-xl text-white'}`}>
              (Deemed to be University)<br></br>
              Kanuru, Vijayawada, Andhra Pradesh, 520007.
            </h2>
          </div>
        </div>
        <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-2' : 'space-x-4'}`}>
        <div className="hidden md:block">
            <Image
              src="/images/ITlogo2.png"
              alt="Information Technology"
              width={isScrolled ? 100 : 140} 
              height={isScrolled ? 100 : 140}
              className=""
            />
    
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/springer2.png"
              alt="springer"
              width={isScrolled ? 100 : 140} 
              height={isScrolled ? 100 : 140}
              className="border-2 border-black"
            />
          </div>
          {/* <div className="hidden  md:block">
            <Image
              src="/images/rclogo.png"
              alt="Research conclave"
              width={isScrolled ? 80 : 100} 
              height={isScrolled ? 80 : 100}
              className="rounded-full border-2 border-yellow-300"
              objectFit="contain"
            />
          </div> */}
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          </div>

          {/* Full Logo for Desktop */}
          {/* <div className="hidden md:block">
            <Image
              src="/images/vikshitbharat.png"
              alt="Azadi ka Amrit Mahostav"
              width={isScrolled ? 80 : 100} 
              height={isScrolled ? 80 : 100}
              className="rounded-full"
            />
          </div> */}
        </div>
        
          <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-xl cursor-pointer z-50 absolute right-6 top-8" /> 
          ) : (
            <FaBars onClick={toggleMenu} className="text-xl cursor-pointer absolute right-6 top-8"/>
          )}
        </div>
      </div>
      <div className={`hidden item-center justify-center gap-16 md:flex    `}>
        <div className={` items-center text-center flex ${isScrolled ? 'hidden' : 'md:block'}`}>
        <h2 className={`font-bold text-3xl  text-[#16325B]  ${isScrolled ? 'text-xs md:text-2xl' : 'text-xl md:text-4xl'}`}>
          8<sup>th</sup>   International Conference on Intelligence Computing and <br />Communication ICICC-2025 
            </h2>
            <h2 className={`text-sm text-[#16325B]  font-bold ${isScrolled ? 'text-xs md:text-base' : 'text-lg md:text-xl'}`}>
            25<sup>th</sup> & 26<sup>th</sup> July - 2025<br></br>
            Organized by: Department of Information Technology
            </h2>
            </div>

            {/* <div className={`  ${isScrolled ? 'hidden' : 'md:block'}`}>
            <Image
              src="/images/springer2.png"
              alt="springer"
              width={isScrolled ? 120 : 200} 
              height={isScrolled ? 120 : 200}
              className="border-2 border-[#16325B]"
            />
          </div> */}
        </div>
      
  
      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed left-0 top-0 w-full h-full bg-[#FFDC7F] text-balck text-xl flex flex-col justify-center items-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
          href="/authr_info"
          className="" onClick={toggleMenu}>
          Author Info
        </Link></li>
        <li><Link
          href="/schedule"
          className="" onClick={toggleMenu}>
          Schedule
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
        </ul>
      </nav>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex justify-center md:mt-6 bg-[#FFDC7F] ">
      <Link
        href="/#home"
        className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
      Home
      </Link>
      <Link
      href="/call_for_papers"
      className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
        Call for Papers
        </Link>

        <Link
          href="/important_dates"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
          Important Dates
        </Link>
        <Link
          href="/committees"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
          Committees
        </Link>
        <Link
          href="/author_info"
          className={`cursor-pointer m-0.5    border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
          Author Info
        </Link>
        <Link
          href="/schedule"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
          Schedule
        </Link>
        <Link
          href="/speakers"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
         Guests & Speakers
        </Link>
        <Link
          href="/contact_us"
          className={`cursor-pointer m-0.5   border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm py-1 px-4' : 'text-base py-1 px-2'} hover:bg-[#FF6600]/10  hover:text-black hover:shadow-lg`}
        >
         Conatct Us
        </Link>
      </nav>
    </header>
      // </div>
  );
};

export default Header;