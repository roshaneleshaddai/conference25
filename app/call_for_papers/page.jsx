import React from 'react'
import Link from 'next/link';
import Imageplacer from '../components/imageplacer/page';
import { motion } from 'framer-motion';

const call_for_papers = () => {
  
  const list_of_tech=[
    "Artificial Intelligence",
    "Computational Intelligence",
    "Cognitive Computing",
    "Cloud & Fog Computing",
    "Deep Learning",
    "Intelligent Agents",
    "Machine Learning",
    "Optimization Techniques",
    "Parallel & Scalable Computing",
    "Security Tools & Technologies",
    "Autonomous Agents",
    "Big data Tools & Technologies",
    "Stream Mining",
    "Social Media",
    "Knowledge – based Systems and Formal Methods",
    "Search Engines and Information Retrieval",
    "Real – time Analytics",
    "Security and Information Assurance",
    "Natural Language Processing",
    "Cybersecurity",
    "Wireless Sensor Networks",
    "Cyber Physical Systems",
    "Health Care Recommendation Systems",
    "Data Science",
    "Quantum Computing",
    "Distributed computing",
    "Blockchain Communications- 5G, 6G and onwards",
    "Sensor networks and embedded systems",
    "Geographic information systems",
    "Body Area Networks",
    "Satellite and Optical Communication",
    "Soft Computing",
    "Data analysis and Visualization",
    "Internet of Things (IoT)",
    "Mathematical Modeling and Simulation",
    "Signal and Speech Processing",
    "Image and Video Processing",
    "Microelectronics and VLSI and Embedded Systems",
    "Smart Transmission grids with renewable energy Systems",
    "Power Electronic devices in Smart Grid applications.",
    "Efficient battery management in EV Technology",
    "Communication technologies for EV charging management",
    "AI applications in renewable energy systems",
    "BMS and ML based EV Technologies"
  ]

  const Display_techs = (x) => {
    return x.map((i, index) => (
      <li key={index}>{i}</li>
    ));
  };
  
  return (
    <div className="md:mt-96 mt-44">
      
      <Imageplacer name="Call for Papers" />
{/* <p className="p-5 font-bold text-center text-black bg-[url('https://img.freepik.com/free-vector/medical-tech-background-with-hexagon-pattern_107791-30275.jpg?t=st=1728633368~exp=1728636968~hmac=cc61870f5b73b9658f533c2c416a8ea48ba36cc9240850a2ac53f2d998d5d902&w=1380')] bg-opacity-25 text-4xl">
      CALL FOR PAPERS
      </p> */}

  {/* <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  \n\nul, li{\n  list-style: none;\n  padding: 0;\n}\n\n.wrapper{\n  background: #eaf6ff;\n  padding: 2rem;\n  border-radius: 15px;\n}\nh1{\n  font-size: 1.1rem;\n  font-family: sans-serif;\n}\n.sessions{\n  margin-top: 2rem;\n  border-radius: 12px;\n  position: relative;\n}\nli{\n  padding-bottom: 1.5rem;\n  border-left: 1px solid #abaaed;\n  position: relative;\n  padding-left: 20px;\n  margin-left: 10px;\n  &:last-child{\n    border: 0px;\n    padding-bottom: 0;\n  }\n  &:before{\n    content: '';\n    width: 15px;\n    height: 15px;\n    background: white;\n    border: 1px solid #4e5ed3;\n    box-shadow: 3px 3px 0px #bab5f8;\n    border-radius: 50%;\n    position: absolute;\n    left: -10px;\n    top: 0px;\n  }\n}\n.time{\n  color: #2a2839;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n}\np{\n  color: #4f4f4f;\n      font-family: sans-serif;\n  line-height: 1.5;\n  margin-top:0.4rem;\n}\n  "
    }}
  /> */}
  <div className='lg:m-5 lg:ml-10 m-4 flex lg:flex-row flex-col items-center justify-center'>
  <div className="bg-[#FFDC7F] p-8 rounded-[15px] lg:w-1/5">
    <h1 className='font-bold text-xl'> Contents of Call for Papers<br></br><span className='text-sm'> (click to navigate)</span> </h1>
    <ul className="mt-8 rounded-[12px] relative">
    <li className="relative pl-5 ml-2 pb-6 border-l border-solid border-[#abaaed] before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
      <div className="time">
        <Link
        href="#paper_submission"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Paper Submission</Link>
        </div>
        {/* <p>How is it already 9:00? Just how???</p> */}
      </li>
      <li className="relative pl-5 ml-2 pb-6 border-l border-solid border-[#abaaed] before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
        <div className="time"><Link
        href="#call_for_reviewers"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Call for Reviewers</Link>
        </div>
        {/* <p>Few more minutes of sleep won't do anyone any harm ..</p> */}
      </li>
      <li className="relative pl-5 ml-2 pb-6 before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
        <div className="time"><Link
        href="#special_sessions"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Special Sessions</Link>
        </div>
        {/* <p>Get up </p> */}
      </li>
    </ul>
  </div>
  
  <div className='hidden lg:block lg:w-4/5 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-14 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Theme of the conference</h1>
      <p className='md:text-xl text-md'>The objective of ICICC 2025 is to provide a platform for academicians, researchers, scientists, professionals, and students to share their knowledge and expertise in the field of Intelligent Computing, Communication, and Convergence, as well as to address a variety of issues in order to raise awareness of technological innovations and to identify challenges and opportunities for the development of smart cities using multidisciplinary approaches. The aim of this conference is to provide a unified forum for advanced, multi-disciplinary research on smart computing and informatics design. On a larger scale, the theme focuses on numerous innovation paradigms in system knowledge, intelligence, and sustainability that can be used to deliver practical solutions to a wide range of challenges in society, the environment, and industry.
      </p>
      </div>

  </div>


      <div className='lg:hidden bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-16 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Theme of the conference</h1>
      <p className='md:text-xl text-md'>The objective of ICICC 2025 is to provide a platform for academicians, researchers, scientists, professionals, and students to share their knowledge and expertise in the field of Intelligent Computing, Communication, and Convergence, as well as to address a variety of issues in order to raise awareness of technological innovations and to identify challenges and opportunities for the development of smart cities using multidisciplinary approaches. The aim of this conference is to provide a unified forum for advanced, multi-disciplinary research on smart computing and informatics design. On a larger scale, the theme focuses on numerous innovation paradigms in system knowledge, intelligence, and sustainability that can be used to deliver practical solutions to a wide range of challenges in society, the environment, and industry.
      </p>
      </div>

      <div className='bg-white shadow-xl border-2 border-black/10  rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:mx-20 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Scope and Interests</h1>
      <p className='md:text-xl text-md'>For its research track, ICICC-2025 invites original, high-quality papers addressing the following topics. All submissions will be subject to plagiarism check. We strongly encourage papers that report experimental work and results. Use of public data sets and repeatability of experiments, well-written papers high lighting the contributions, novel approaches for different computing platforms, are a few important parameters used for research quality assessment. Submissions of high-quality papers is expected in all areas of Data Engineering, Intelligent Computing, Computer Communication, Networking and IoT.
      </p>
      <ul className="list-disc pl-5 pt-2 md:text-xl text-md">
        {Display_techs(list_of_tech)}
      </ul>
      <p className='md:text-xl text-md pt-5' id="paper_submission">
      Submitted papers should neither be previously published nor under consideration for publication elsewhere. All papers will be refereed through a peer review process. The proceedings of ICICC-2025 will be published in the Springer Book series “Lecture Notes in Networks and Systems (LNNS)”, which will be Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in Web of Science.
      <span id="call_for_reviewers"></span></p>
      </div>

      <div className='flex flex-col items-center'>
      <div className='w-1/2 bg-[#FFDC7F] rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2 text-center'>Paper Submission: <span className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Click Here</span></h1>
      </div>
      </div>

      <div className='bg-white shadow-xl border-2 border-black/10  rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:mx-20 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2' id='special_sessions'>Call for Reviewers</h1>
      <p className='md:text-xl text-md'>Dear Professor, If you are interested to review papers at our conference ICICC 2025, please let us know.</p>
      <p className='md:text-xl text-md py-2'>You must have Microsoft CMT login, if not, <span className='underline cursor-pointer'>create it</span> and let us know by filling with your login email id and your name, affiliations etc. in the below google form</p>
      <p className='md:text-xl text-md p-5 m-2 underline cursor-pointer'>Google Form Link</p>

      <p className='md:text-xl text-md'>Only CSE, IT and ECE Professors</p>

      <p className='md:text-xl text-md pt-5'>For more details Contact</p>
      <p className='md:text-xl text-md pt-2'>Dr. K. Srujan Raju - 7989929663</p>
      <p className='md:text-xl text-md pt-2'>Dr. V. Naresh Kumar - 7569051878</p>
      </div>

      <div className='bg-white shadow-xl border-2 border-black/10  rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:mx-20 md:my-20 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Special Sessions</h1>
      <p className='md:text-xl text-md'>A call for special sessions is an instrumental mechanism in ensuring the inclusivity and relevance of a conference by inviting and incorporating diverse perspectives and specialized knowledge into the event’s program. 
        Proposals for additional sessions that address specific themes, topics, or emerging areas of interest within the broader conference scope are open. Here are some key points about the call for special sessions: 
      </p>
      <div>
      <h1 className='md:text-xl text-lg font-bold py-2 mt-4'>Scope Definition:</h1>
      <ul className="list-disc pl-5 pt-1 md:text-xl text-md">
      <li>Call for Special Session is a practice to broaden the range of topics covered.</li>
      <li>The scope of the special session is defined, outlining the specific theme, challenges, or trends it aims to address.</li>
    </ul>
    <h1 className='md:text-xl text-lg font-bold py-2 mt-4'>Proposal Submission:</h1>
    <ul className="list-disc pl-5 pt-1 md:text-xl text-md">
      <li>Researchers or experts interested in organizing a special session submit proposals to the conference committee by email at <span className='underline cursor-pointer underline-offset-8 hover:underline hover:decoration-4'>icicc2025@vrsiddartha.ac.in.</span></li>
      <li>Proposals should typically include a session title, abstract, objectives, and potential contributors.</li>
    </ul>
    
    <h1 className='md:text-xl text-lg font-bold py-2 mt-4'>Review Process:</h1>
    <ul className="list-disc pl-5 pt-1 md:text-xl text-md">
      <li>The conference committee reviews the proposals to ensure alignment with the conference’s overall goals and standards.</li>
      <li>Criteria may include the relevance of the topic, potential impact, and the qualifications of the organizers.</li>
    </ul>
    
    <h1 className='md:text-xl text-lg font-bold py-2 mt-4'>Acceptance and Promotion:</h1>
    <ul className="list-disc pl-5 pt-1 md:text-xl text-md">
      <li>Accepted special sessions are integrated into the conference program.</li>
      <li>The organizers of approved sessions collaborate with the conference committee to promote their sessions to attract relevant participants.</li>
      </ul>

      </div>
      </div>

    </div>
  )
}

export default call_for_papers
