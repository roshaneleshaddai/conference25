'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import "./globals.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Dates from "./components/dates/page";

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
        
        <div className=" flex flex-col justify-around  md:flex-row">

        <div className="text-3xl md:w-1/3 font-bold text-[#227B94] underline-offset-8 md:ml-10">
          <h1 className="lg:text-7xl text-5xl">About<br></br>ICICC-2025</h1>
          <hr className="h-1 my-4 bg-[#227B94] border-0  w-1/3" />
          <h1 className="lg:text-4xl text-3xl text-[#10375C]">It is our great pleasure to warmly <br />welcome you to <div className="text-[#F3C623]">ICICC-2025.</div></h1>
        </div>
        <div className=" md: font-medium md:w-2/3  text-xl md:text-2xl">
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


  const Partners =() =>{

    return (
      <section id="partners" className="">
        <div className="flex flex-col md:flex-row  justify-around">
          <div className="flex flex-col mx-16 md:w-1/2 ">
            <div className="font-bold text-2xl md:text-5xl pb-4">
            Technical Partners
            <hr className="h-1 my-4 bg-[#227B94] border-0 " />
            </div>
            <div className="flex flex-col  md:flex-row">
          <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s"
              alt="Computer Society Of India"
              width={200} 
              height={200}
              className="p-4"
            />
            <Image
              src="https://meghaengg.ac.in/wp-content/uploads/2022/01/Iste.png"
              alt="Computer Society Of India"
              width={200} 
              height={200}
              className="p-4"
            />
            </div>
          </div>
          <div className="flex flex-col mx-16 md:w-1/2 ">
          <div className="font-bold text-2xl md:text-5xl pb-4">
            Publishing  Partners
            <hr className="h-1 my-4 bg-[#227B94] border-0  " />
            </div>
            <div className="flex flex-col items-center md:flex-row">
          <Image
              src="/images/springer.png"
              alt="springer"
              width={400} 
              height={400}
              className="p-4"
            />
            
            </div>
          </div>
        </div>

      </section>
    );  
}

const Editions_News =() =>{

  return (
    <section id="editions" className="">
      <div className="flex flex-col md:flex-row  justify-around">
        <div className="flex flex-col mx-16 md:w-1/2 ">
          <div className="font-bold text-2xl md:text-5xl pb-4">
          Previous Editions
          <hr className="h-1 my-4 bg-[#227B94] border-0 " />
          </div>
          <div className="flex flex-col font-bold  md:flex-row">
            <ul  className="md:text-4xl pl-10">
            <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-99-1588-0">ICICC 2022 (7<sup>th</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-99-1588-0">ICICC 2022 (6<sup>th</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-19-1559-8">ICICC 2021 (5<sup>th</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-16-0980-0">ICICC 2020 (4<sup>th</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-15-1084-7">ICICC 2019 (3<sup>rd</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-10-7245-1">ICICC 2017 (2<sup>nd</sup> Edition)</Link>
              </li>
              <li className=" py-4">
                <Link href="https://link.springer.com/book/10.1007/978-981-10-2035-3">ICICC 2016 (1<sup>st</sup> Edition)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mx-16 md:w-1/2 ">
        <div className="font-bold text-2xl md:text-5xl pb-4">
          News and Updates
          <hr className="h-1 my-4 bg-[#227B94] border-0  " />
          </div>
          <div className="flex flex-col items-center md:flex-row">

          </div>
        </div>
      </div>

    </section>
  );  
}

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
    <section id="about-section" className="overflow-hidden min-h-screen flex justify-center items-center p-10">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* Left Half: About VRSEC */}
        <div
          className={`md:w-1/2 p-5 transition-transform duration-700 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-2xl md:text-7xl font-bold mb-4 text-[#227B94]">About VRSEC</h2>
          <p className="text-sm md:text-2xl text-justify ">
          VRSEC has achieved significant recognition, ranked 141st in the NIRF 2022 and consistently below 200 for the past five years. It is NAAC accredited with an A+ grade and holds autonomous status extended to 2028. The institute has been NBA accredited since 1998 and follows outcome-based education (Tier I) since 2013. It has earned accolades such as the AICTE-CII IndPact award, platinum ratings, and ARIIA rankings, and is part of AICTE's MARGADARSHAN scheme. VRSEC is also recognized for its research contributions, NABL-accredited labs, and consultancy services. It collaborates with leading organizations and boasts strong placement records with top global companies.
          </p>
        </div>

        {/* Right Half: Scope */}
        <div
          className={`md:w-1/2 p-5 transition-transform duration-700 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-[#227B94]">Scope</h2>
          <p className="text-sm md:text-2xl text-justify ">
            The scope of this conference has been kept wide, and the following are the topics covered (but not limited to):
          </p>
          <div className="flex flex-col md:flex-row">
          <ul className=" text-sm md:text-2xl list-disc mt-10  ml-5">
            <li className="p-2">Artificial Intelligence</li>
            <li className="p-2">Computational Intelligence</li>
            <li className="p-2">Cognitive Computing</li>
            <li className="p-2">Cloud & Fog Computing</li>
            <li className="p-2">Deep Learning</li>
            <li className="p-2">Intelligent Control Agents</li>
            <li className="p-2">Internet of Things</li>
            <li className="p-2">Machine Learning</li>
            <li className="p-2">Big Data Tools & Technologies</li>
            <li className="p-2">Search Engines & IR</li>
            <li className="p-2">Optimization Algorithms</li>
            <li className="p-2">Cyber Security</li>
            <li className="p-2">Mathematical Modelling</li>
           
          </ul>
          <ul className="text-sm md:text-2xl list-disc mt-10  ml-5">
          <li className="p-2">Image and Video Processing</li>
            <li className="p-2">Satellite and Optical Communication</li>
            <li className="p-2">Geographical Information Systems</li>
            <li className="p-2">Bio Informatics</li>
            <li className="p-2">Data Analysis and Visualization</li>
            <li className="p-2">Real-Time Operating Systems</li>
            <li className="p-2">Robotics</li>
            <li className="p-2">Mobile Computing</li>
            <li className="p-2">Other Topics Related to ICICC Theme</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


const Travel=()=>{
  
  const paperDetails = [
    {
      serialNo: 1,
      paperId: 107,
      correspondingAuthor: "Bondalapati Mahesh",
      title: "Drug Recommendation System Based On Patient Condition",
      totalAmount: 572
    },
    {
      serialNo: 2,
      paperId: 163,
      correspondingAuthor: "Thiagarajan Kittappa",
      title: "OBJECT DETECTION AND CRIME INVESTIGATION",
      totalAmount: 865
    },
    {
      serialNo: 3,
      paperId: 401,
      correspondingAuthor: "Dr. Sandeepkumar Kulkarni",
      title: "Design and implementation of hardware module for rectangular MIMO microstrip patch antenna for 5G communication",
      totalAmount: 1470
    },
    {
      serialNo: 4,
      paperId: 769,
      correspondingAuthor: "Seema Jogad",
      title: "Comparative Analysis of Double-Tail Dynamic Comparator",
      totalAmount: 2000
    }
  ];
  
  return (
     <section>
       <div
        className={`mt-1 w-full bg-white bg-opacity-50 p-8 rounded-lg transition-opacity duration-1000 `}>
        <h1 className="text-2xl md:text-5xl font-bold text-center pb-8 text-[#227B94]">ICICC 2025 - Travel Reimbursement for Authors</h1>
  
      {/* table of journals */}
  <div className="overflow-x-auto">
  <div className="min-w-[500px] flex justify-center">
    <table className="text-left table-auto border-collapse border-2 border-[#4F709C] min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs md:text-xl border-[#4F709C]">S.No.</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs md:text-xl border-[#4F709C]">Paper Id</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs md:text-xl border-[#4F709C]">Corresponding Author</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs md:text-xl border-[#4F709C]">Title</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs md:text-xl border-[#4F709C]">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {paperDetails.map((paper) => (
          <tr key={paper.sNo}>
            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.serialNo}</td>
            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.paperId}</td>
            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.correspondingAuthor}</td>
            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.title}</td>
            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.totalAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
     </section>
  );
}

  return (
   <>
   <div className="mt-44 md:mt-96"></div>
    <About/>
    <Partners/>
    <Editions_News/>
    <About_vrsec/>
{/*     <Travel/> */}
    <Dates/>
   </>
  );
}

