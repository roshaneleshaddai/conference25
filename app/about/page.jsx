'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const About = () => {
    const [visibleLines, setVisibleLines] = useState([]);
  
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      
      if (!aboutSection) {
        return; // Exit the function if the element doesn't exist
      }
    
  const headerHeight = document.querySelector('header').offsetHeight; // Adjust the selector as needed
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  
};
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <section id="about" className="p-10  mt-5">
        
        <div className=" flex flex-col justify-around  lg:flex-row">

        <div className="text-3xl lg:w-1/3 font-bold text-[#87A2FF] underline-offset-8 lg:ml-10">
          <h1 className="lg:text-7xl text-5xl">About<br></br>ICICC-2025</h1>
          <hr className="h-1 my-4 bg-[#87A2FF] border-0  w-1/3" />
          <h1 className="lg:text-4xl text-3xl text-[#10375C]">It is our great pleasure to warmly <br />welcome you to <div className="text-[#F3C623]">ICICC-2025.</div></h1>
        </div>
        <div className=" lg:font-medium lg:w-2/3  text-xl lg:text-xl">
            <p className="text-justify">
      The objective of this Scopus indexed 8th International Conference on Intelligent
      Computing and Communication (ICICC - 2025) is to present a unified platform
      for advanced and multi-disciplinary research towards design of smart
      computing, information systems, electronic systems. The theme focuses on
      various innovation paradigms in system knowledge, intelligence and
      sustainability that may be applied to provide realistic solution to variegated
      problems in society, environment and industries. The scope is also extended
      towards deployment of emerging computational and knowledge transfer
      approaches, optimizing solutions in a variety of disciplines of Computer Science
      and Engineering, Electronics and Communication Engineering, Electrical and
      Electronics Engineering, Electronics and Instrumentation Engineering. The
      conference proceedings aim to publish unpublished work pertaining to the
      topics mentioned below. The conference is scheduled to be held on July,
      2025 at Velagapudi Ramakrishna Siddhartha Engineering College,Kanuru,India...   
            </p>
        
        </div>
       
        </div>
        
      </section>
    );
  };

const About_vrsec = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    if (!aboutSection) return;

    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition - 150) {
      setIsVisible(true); // Reveal both blocks when section comes into view
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="overflow-hidden flex justify-center p-10">
        {/* Left Half: About VRSEC */}
        <div
          className={`lg:p-5 transition-transform duration-700 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#87A2FF]">About VRSEC</h2>
          <p className="text-lg lg:text-xl text-justify ">
          VRSEC has achieved significant recognition, ranked 141st in the NIRF 2022 and consistently below 200 for the past five years. It is NAAC accredited with an A+ grade and holds autonomous status extended to 2028. The institute has been NBA accredited since 1998 and follows outcome-based education (Tier I) since 2013. It has earned accolades such as the AICTE-CII IndPact award, platinum ratings, and ARIIA rankings, and is part of AICTE's MARGADARSHAN scheme. VRSEC is also recognized for its research contributions, NABL-accredited labs, and consultancy services. It collaborates with leading organizations and boasts strong placement records with top global companies.
          </p>
        </div>
    </section>
  );
};

  return (
   <>
   <div className="mt-44 lg:mt-96"></div>
    <About/>
    <About_vrsec/>
   </>
  );
}

