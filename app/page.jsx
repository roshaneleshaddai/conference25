'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import "./globals.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Dates from "./components/dates/page";
import Imageplacer from "./components/imageplacer/page";

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
        <div className=" lg: font-medium lg:w-2/3  text-xl lg:text-xl">
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
        <div className="flex flex-col lg:flex-row  justify-around">
          <div className="flex flex-col mx-16 lg:w-1/2 ">
            <div className="font-bold text-2xl lg:text-3xl pb-4">
            Technical Partners
            <hr className="h-1 my-4 bg-[#87A2FF] border-0 " />
            </div>
            <div className="flex flex-col  lg:flex-row">
          <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s"
              alt="Computer Society Of India"
              width={150} 
              height={200}
              className="p-4"
            />
            <Image
              src="https://cis.ieee.org/images/files/Branding/logos/color/IEEE_CIS_logo_RGB_72ppi.jpg"
              alt="Cis"
              width={150} 
              height={200}
              className="p-4"
            />
            <Image
              src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/06/q-768x230.jpg"
              alt="SMC"
              width={150} 
              height={200}
              className="p-4"
            />
             <Image
              src="https://yt3.googleusercontent.com/ytc/AIdro_l3FuOt4ZYJ7dFFXpaWxjMcuAybjzTLtHqCrYMnMKnjjLn4=s900-c-k-c0x00ffffff-no-rj"
              alt="ACM"
              width={150} 
              height={200}
              className="p-4"
            />
            </div>
          </div>
          <div className="flex flex-col mx-16 lg:w-1/2 ">
          <div className="font-bold text-2xl lg:text-3xl pb-4">
            Publishing  Partners
            <hr className="h-1 my-4 bg-[#87A2FF] border-0  " />
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="justify-center items-center">
              <Image
              src="/images/springer.png"
              alt="springer"
              width={300} 
              height={300}
              className=""
              />
              </div>
            </div>
          </div>
        </div>

      </section>
    );  
}

const Editions_News =() =>{

  return (
    <section id="editions" className="">
      <div className="flex flex-col lg:flex-row  justify-around">
        <div className="flex flex-col mx-16 lg:w-1/2 ">
          <div className="font-bold text-2xl lg:text-3xl pb-4">
          Previous Editions
          <hr className="h-1 my-4 bg-[#87A2FF] border-0 " />
          </div>
          <div className="flex flex-col font-bold  lg:flex-row">
            <ul  className="lg:text-2xl pl-10">
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
        <div className="flex flex-col mx-16 lg:w-1/2 ">
        <div className="font-bold text-2xl lg:text-3xl pb-4">
          News and Updates
          <hr className="h-1 my-4 bg-[#87A2FF] border-0  " />
          </div>
          <div className="flex flex-col items-center lg:flex-row">
          <ol className="font-bold text-xl">
         <li>
           Poster Launched on 23rd November 2024 &nbsp;   
            <span className="bg-red-600 rounded text-white p-2 animation-blink">new</span>
           </li>
          </ol>
             
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
      <div className="flex flex-col justify-between ">
        {/* Left Half: About VRSEC */}
        <div
          className={`p-5 transition-transform duration-700 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#87A2FF]">About VRSEC</h2>
          <p className="text-sm lg:text-xl text-justify ">
          VRSEC has achieved significant recognition, ranked 141st in the NIRF 2022 and consistently below 200 for the past five years. It is NAAC accredited with an A+ grade and holds autonomous status extended to 2028. The institute has been NBA accredited since 1998 and follows outcome-based education (Tier I) since 2013. It has earned accolades such as the AICTE-CII IndPact award, platinum ratings, and ARIIA rankings, and is part of AICTE's MARGADARSHAN scheme. VRSEC is also recognized for its research contributions, NABL-accredited labs, and consultancy services. It collaborates with leading organizations and boasts strong placement records with top global companies.
          </p>
        </div>

        {/* Right Half: Scope */}
        <div
          className={`p-5 w-full transition-transform duration-700 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#87A2FF]">Scope</h2>
          <p className="text-sm lg:text-xl text-justify ">
            The scope of this conference has been kept wide, and the following are the topics covered (but not limited to):
          </p>
          <div className="flex flex-col lg:flex-row">
          <div className="mt-10 flex lg:flex-row flex-col lg:gap-40">
            <div className="lg:w-1/2">
            {/* Artificial Intelligence and Machine Learning */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">1. Artificial Intelligence and Machine Learning</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">Deep Learning and Neural Networks</li>
                <li className="p-2">Natural Language Processing</li>
                <li className="p-2">Explainable AI and Ethics in AI</li>
                <li className="p-2">Reinforcement Learning and Optimization</li>
                <li className="p-2">AI in Healthcare and Industry Applications</li>
              </ul>
            </div>

            {/* Data Science and Big Data Analytics */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">2. Data Science and Big Data Analytics</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">Data Mining and Predictive Analytics</li>
                <li className="p-2">Big Data Infrastructure and Frameworks</li>
                <li className="p-2">Visualization Techniques and Tools</li>
                <li className="p-2">Real-Time Data Processing</li>
                <li className="p-2">Privacy and Security in Data Analytics</li>
              </ul>
            </div>

            {/* Internet of Things (IoT) and Smart Systems */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">3. Internet of Things (IoT) and Smart Systems</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">IoT Architectures and Protocols</li>
                <li className="p-2">Smart Cities and Smart Grids</li>
                <li className="p-2">Wearable and Embedded Systems</li>
                <li className="p-2">Edge and Fog Computing in IoT</li>
                <li className="p-2">IoT Security and Privacy</li>
              </ul>
            </div>

            {/* Wireless Communication and Networking */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">4. Wireless Communication and Networking</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">5G/6G Networks and Beyond</li>
                <li className="p-2">Cognitive and Software-Defined Radios</li>
                <li className="p-2">Network Optimization and Traffic Management</li>
                <li className="p-2">Wireless Sensor Networks and Ad Hoc Networks</li>
                <li className="p-2">Security Challenges in Wireless Communication</li>
              </ul>
            </div>
            </div>

            <div className="lg:w-1/2">
            {/* Cybersecurity and Cryptography */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">5. Cybersecurity and Cryptography</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">Network Security and Privacy</li>
                <li className="p-2">Blockchain and Distributed Ledger Technologies</li>
                <li className="p-2">Post-Quantum Cryptography</li>
                <li className="p-2">Intrusion Detection and Prevention Systems</li>
                <li className="p-2">AI and ML Applications in Cybersecurity</li>
              </ul>
            </div>

            {/* Robotics and Autonomous Systems */}
            <div className="mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">6. Robotics and Autonomous Systems</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">Swarm Robotics and Multi-Agent Systems</li>
                <li className="p-2">Human-Robot Interaction</li>
                <li className="p-2">Autonomous Vehicles and Drones</li>
                <li className="p-2">Navigation and Mapping</li>
                <li className="p-2">AI for Robotics</li>
              </ul>
            </div>

            {/* Cloud, Edge, and High-Performance Computing */}
            <div className="">
              <h2 className="text-lg lg:text-2xl font-bold">7. Cloud, Edge, and High-Performance Computing</h2>
              <ul className="list-disc ml-5 text-sm lg:text-xl">
                <li className="p-2">Distributed and Cloud Computing</li>
                <li className="p-2">Virtualization and Containerization</li>
                <li className="p-2">Edge Computing Applications</li>
                <li className="p-2">Green and Sustainable Computing</li>
                <li className="p-2">High-Performance Computing Architectures</li>
              </ul>
            </div>
            </div>
          </div>

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
        <h1 className="text-2xl lg:text-5xl font-bold text-center pb-8 text-[#87A2FF]">ICICC 2025 - Travel Reimbursement for Authors</h1>
  
      {/* table of journals */}
  <div className="overflow-x-auto">
  <div className="min-w-[500px] flex justify-center">
    <table className="text-left table-auto border-collapse border-2 border-[#4F709C] min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs lg:text-xl border-[#4F709C]">S.No.</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs lg:text-xl border-[#4F709C]">Paper Id</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs lg:text-xl border-[#4F709C]">Corresponding Author</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs lg:text-xl border-[#4F709C]">Title</th>
          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] font-bold text-xs lg:text-xl border-[#4F709C]">Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {paperDetails.map((paper) => (
          <tr key={paper.sNo}>
            <td className="px-4 py-2 border text-xs lg:text-lg border-[#4F709C]">{paper.serialNo}</td>
            <td className="px-4 py-2 border text-xs lg:text-lg border-[#4F709C]">{paper.paperId}</td>
            <td className="px-4 py-2 border text-xs lg:text-lg border-[#4F709C]">{paper.correspondingAuthor}</td>
            <td className="px-4 py-2 border text-xs lg:text-lg border-[#4F709C]">{paper.title}</td>
            <td className="px-4 py-2 border text-xs lg:text-lg border-[#4F709C]">{paper.totalAmount}</td>
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
   <div className="mt-44 lg:mt-92">
   <Imageplacer name="8th International Conference on Intelligent
      Computing and Communication (ICICC - 2025)"/>
        <div className="flex flex-col lg:flex-row mt-5 justify-evenly">
      <div className="hover:shadow-2xl hover:border-black/15 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 flex flex-col lg:w-1/2 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 md:mx-16 mx-8 md:my-8 my-4">
        <div className="font-bold text-2xl lg:text-3xl pb-4">
          Technical Partners
          <hr className="h-1 my-4 bg-[#87A2FF] border-0" />
        </div>
        <div className="flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s"
              alt="Computer Society Of India"
              width={150}
              height={200}
              className="p-4"
            />
            <Image
              src="https://cis.ieee.org/images/files/Branding/logos/color/IEEE_CIS_logo_RGB_72ppi.jpg"
              alt="Cis"
              width={150}
              height={200}
              className="p-4"
            />
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <Image
              src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/06/q-768x230.jpg"
              alt="SMC"
              width={150}
              height={200}
              className="p-4"
            />
            <Image
              src="https://yt3.googleusercontent.com/ytc/AIdro_l3FuOt4ZYJ7dFFXpaWxjMcuAybjzTLtHqCrYMnMKnjjLn4=s900-c-k-c0x00ffffff-no-rj"
              alt="ACM"
              width={150}
              height={200}
              className="p-4"
            />
          </div>
        </div>
      </div>

      {/* Publishing Partners */}
      <div className="hover:shadow-2xl hover:border-black/15 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 flex flex-col lg:w-1/2 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 md:mx-16 mx-8 md:my-8 my-4">
        <div className="font-bold text-2xl lg:text-3xl pb-4">
          Publishing Partners
          <hr className="h-1 my-4 bg-[#87A2FF] border-0" />
        </div>
        <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row lg:gap-10">
            <Image
              src="/images/springer.png"
              alt="springer"
              width={300}
              height={300}
              className="p-4"
            />
          </div>
          </div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-evenly">  
      <div className="hover:shadow-2xl hover:border-black/15 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 flex flex-col lg:w-1/2 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 md:mx-16 mx-8 md:my-8 my-4">
        {/* <div className="font-bold text-2xl lg:text-3xl pb-4">
          News and Updates
          <hr className="h-1 my-4 bg-[#87A2FF] border-0  " />
          </div>
          <div className="flex flex-col items-center lg:flex-row">
          <ol className="font-bold text-xl">
         <li>
           Poster Launched on 23rd November 2024 &nbsp;   
            <span className="bg-red-600 rounded text-white p-2 animation-blink">new</span>
           </li>
          </ol>
             
          </div> */}

        <div className="font-bold text-2xl lg:text-3xl pb-4">
            News and Updates
            <hr className="h-1 my-4 bg-[#87A2FF] border-0" />
          </div>
          <div className="flex flex-wrap items-center">
            <ol className="font-bold text-xl flex items-center gap-2">
              <li className="flex items-center">
                <span>Poster Launched on 23rd November 2024</span>
                <span className="ml-2 w-12 h-8 bg-red-500 text-base rounded-full shadow-lg shadow-cyan-500 blink text-white pt-1 pl-1">NEW</span>
              </li>
            </ol>
          </div>
        </div>

        <div className='hover:shadow-2xl hover:border-black/15 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 flex flex-col lg:w-1/2 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-20 md:m-20 px-8 py-5 md:mx-16 mx-8 md:my-8 my-4'>
        <div className="flex flex-col items-center">
        <h1 className='md:text-3xl text-2xl font-bold pb-2 text-center'>Paper Submission: 
        <Link href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F" 
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Click Here
        </Link>
        </h1>
        </div>
        </div>
      

        </div>
        <div className="flex flex-col items-center">
        <div className="hover:shadow-2xl hover:border-black/15 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 flex flex-col lg:w-1/2 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-12 md:pb-12 md:mb-20 md:mx-10 px-8 py-5 md:mx-16 mx-8 md:my-8 my-4">
        <div>
          <h1 className="text-2xl md:text-4xl text-black pt-4 font-bold">Important Dates</h1>
          <hr className="h-1 my-4 bg-[#87A2FF] border-0 mb-10" />
          <ul className="text-sm md:text-2xl space-y-4">
             <li className="flex items-center">
               <FaRegCalendarAlt className="mr-2" />
               <span>2nd June 2025 - Deadline for Submission </span>
             </li>
             <li className="flex items-center">
               <FaRegCalendarAlt className="mr-2" />
               <span>25th June 2025 - Acceptance Notification & Registrations</span>
             </li>
             <li className="flex items-center">
               <FaRegCalendarAlt className="mr-2" />
               <span>30th June 2025 -  Registration & Final Paper Submission</span>
             </li>
           </ul>
        </div>
        </div>
        </div>
    </div>
   </>
  );
}
