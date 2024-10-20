'use client'
import React, { useState } from 'react';
import Imageplacer from '../components/imageplacer/page';

const Schedule = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  const tracks = [
    {
      id: 1,
      title: "Day-1: DATE : 30 AUGUST 2024 / Time : 12:30 PM - 01:30 PM, TRACK- 1: Artificial Intelligence and Machine Learning",
      details: [
        { sno: 1, paperid: 8, title: "Paper Title: A Novel Approach to AI and ML" },
        { sno: 2, paperid: 9, title: "Paper Title: AI and ML in Healthcare" },
        { sno: 3, paperid: 10, title: "Paper Title: AI and ML in Finance" },
      ],
    },
    {
      id: 2,
      title: "Day-1: DATE : 30 AUGUST 2024 / Time : 12:30 PM - 01:30 PM, TRACK- 2: Machine Intelligence",
      details: [
        { sno: 1, paperid: 11, title: "Paper Title: Machine Intelligence in Autonomous Vehicles" },
        { sno: 2, paperid: 12, title: "Paper Title: Advanced Algorithms in Machine Intelligence" },
        { sno: 3, paperid: 13, title: "Paper Title: Machine Intelligence for Robotics" },
      ],
    },
    {
      id: 3,
      title: "Day-1: DATE : 30 AUGUST 2024 / Time : 02:00 PM - 04:00 PM, TRACK- 3: Internet of Things (IoT), Agriculture and Smart Systems",
      details: [
        {
          sno: 1,
          paperid: 14,
          title: "Paper Title: IoT in Precision Agriculture",
        },
        {
          sno: 2,
          paperid: 15,
          title: "Paper Title: Smart Systems for Crop Monitoring",
        },
        {
          sno: 3,
          paperid: 16,
          title: "Paper Title: IoT for Smart Homes and Cities",
        },
      ],
    },
    {
      id: 4,
      title: "Day-1: DATE : 30 AUGUST 2024 / Time : 02:00 PM - 04:00 PM, TRACK- 4: Bio-Technology",
      details: [
        {
          sno: 1,
          paperid: 17,
          title: "Paper Title: CRISPR and Genetic Engineering",
        },
        {
          sno: 2,
          paperid: 18,
          title: "Paper Title: Biotechnology in Drug Development",
        },
        {
          sno: 3,
          paperid: 19,
          title: "Paper Title: Bioinformatics and Its Applications",
        },
      ],
    },
    {
      id: 5,
      title: "Day-2: DATE : 31 AUGUST 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 5: Healthcare Evaluation",
      details: [
        {
          sno: 1,
          paperid: 20,
          title: "Paper Title: Evaluating AI in Healthcare Diagnosis",
        },
        {
          sno: 2,
          paperid: 21,
          title: "Paper Title: Health Data Analytics for Patient Care",
        },
        {
          sno: 3,
          paperid: 22,
          title: "Paper Title: Wearable Technology for Health Monitoring",
        },
      ],
    },
    {
      id: 6,
      title: "Day-2: DATE : 31 AUGUST 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 6: Process Automation, Innovation and Mobile Communication",
      details: [
        {
          sno: 1,
          paperid: 23,
          title: "Paper Title: Automation in Manufacturing Processes",
        },
        {
          sno: 2,
          paperid: 24,
          title: "Paper Title: Innovations in 5G Mobile Communication",
        },
        {
          sno: 3,
          paperid: 25,
          title: "Paper Title: The Future of Mobile-Based Automation",
        },
      ],
    },
    {
      id: 7,
      title: "Day-2: DATE : 31 AUGUST 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 7: Cybersecurity and Privacy",
      details: [
        {
          sno: 1,
          paperid: 26,
          title: "Paper Title: Cybersecurity Threats in the Digital Age",
        },
        {
          sno: 2,
          paperid: 27,
          title: "Paper Title: Privacy Concerns in IoT Devices",
        },
        {
          sno: 3,
          paperid: 28,
          title: "Paper Title: Blockchain for Enhanced Data Security",
        },
      ],
    },
    {
      id: 8,
      title: "Day-2: DATE : 31 AUGUST 2024 / Time : 01:30 PM - 03:00 PM, TRACK- 8: Communication and Advancement",
      details: [
        {
          sno: 1,
          paperid: 29,
          title: "Paper Title: Advances in Wireless Communication",
        },
        {
          sno: 2,
          paperid: 30,
          title: "Paper Title: Next-Gen Communication Networks",
        },
        {
          sno: 3,
          paperid: 31,
          title: "Paper Title: Communication Technologies in Remote Areas",
        },
      ],
    },
    {
      id: 9,
      title: "Day-2: DATE : 31 AUGUST 2024 / Time: 01:30 PM - 03:00 PM, TRACK- 9: Technologies for Logic and Computing",
      details: [
        {
          sno: 1,
          paperid: 32,
          title: "Paper Title: Quantum Computing and Logical Systems",
        },
        {
          sno: 2,
          paperid: 33,
          title: "Paper Title: Advances in Logic-Based Algorithms",
        },
        {
          sno: 3,
          paperid: 34,
          title: "Paper Title: Logic in High-Performance Computing",
        },
      ],
    },
  ];

  const handleClick = (t) => setSelectedTrack(t);

  return (
    <>
      <div className="mt-44 md:mt-96"></div>
      <Imageplacer name="Schedule" />
      <h1 className='text-2xl md:text-5xl text-center font-bold text-[#227B94] mt-16'>Tracks</h1>
      <div className="flex flex-col items-center border-2 border-[#227B94] p-10 m-4 md:m-16 md:mx-32 md:py-8 md:p-16">
        <div className="flex flex-col w-full ">
          {tracks.map((track) => (
            <div key={track.id} >
              <button
                onClick={() => handleClick(track)}
                className="m-2 bg-[#FFDC7F] text-xs md:text-xl hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded min-w-full"
              >
                {track.title}
              </button>

              {/* Display track details if this track is selected */}
              {selectedTrack && selectedTrack.id === track.id && (
                <div className="mt-4 w-full flex flex-col items-center">
                  <h2 className="text-xs md:text-xl font-bold mb-4">{selectedTrack.title}</h2>
                  <div className="overflow-x-auto w-full flex justify-center">
                    <table className="text-left table-auto border-collapse border-2 border-[#4F709C]">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] text-bold text-xs md:text-xl border-[#4F709C]">S.No.</th>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] text-bold text-xs md:text-xl border-[#4F709C]">Paper Id</th>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFDC7F] text-bold text-xs md:text-xl border-[#4F709C]">Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTrack.details.map((paper) => (
                          <tr key={paper.sno}>
                            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.sno}</td>
                            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.paperid}</td>
                            <td className="px-4 py-2 border text-xs md:text-lg border-[#4F709C]">{paper.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
