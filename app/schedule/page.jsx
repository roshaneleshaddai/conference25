'use client'
import React, { useState } from 'react';
import Imageplacer from '../components/imageplacer/page';

const Schedule = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  const tracks = [
    {
      id: 1,
      title: "Day-1: DATE : 25TH JULY 2024 / Time : 12:30 PM - 01:30 PM, TRACK- 1: Artificial Intelligence and Machine Learning",
      details: [
        { sno: 1, paperid: 1, title: "" },
        { sno: 2, paperid: 2, title: "" },
        { sno: 3, paperid: 3, title: "" },
        { sno: 4, paperid: 4, title: "" },
        { sno: 5, paperid: 5, title: "" },
        { sno: 6, paperid: 6, title: "" },
        { sno: 7, paperid: 7, title: "" },
        { sno: 8, paperid: 8, title: "" },
        { sno: 9, paperid: 9, title: "" },
        { sno: 10, paperid: 10, title: "" },
      ],
    },
    {
      id: 2,
      title: "Day-1: DATE : 25TH JULY 2024 / Time : 12:30 PM - 01:30 PM, TRACK- 2: Machine Intelligence",
      details: [
        { sno: 1, paperid: 11, title: "" },
        { sno: 2, paperid: 12, title: "" },
        { sno: 3, paperid: 13, title: "" },
        { sno: 4, paperid: 14, title: "" },
        { sno: 5, paperid: 15, title: "" },
        { sno: 6, paperid: 16, title: "" },
        { sno: 7, paperid: 17, title: "" },
        { sno: 8, paperid: 18, title: "" },
        { sno: 9, paperid: 19, title: "" },
        { sno: 10, paperid: 20, title: "" },
       
      ],
    },
    {
      id: 3,
      title: "Day-1: DATE : 25TH JULY 2024 / Time : 02:00 PM - 04:00 PM, TRACK- 3: Internet of Things (IoT), Agriculture and Smart Systems",
      details: [
        { sno: 1, paperid: 21, title: "" },
        { sno: 2, paperid: 22, title: "" },
        { sno: 3, paperid: 23, title: "" },
        { sno: 4, paperid: 24, title: "" },
        { sno: 5, paperid: 25, title: "" },
        { sno: 6, paperid: 26, title: "" },
        { sno: 7, paperid: 27, title: "" },
        { sno: 8, paperid: 28, title: "" },
        { sno: 9, paperid: 29, title: "" },
        { sno: 10, paperid: 30, title: "" },
            ],
    },
    {
      id: 4,
      title: "Day-1: DATE : 25TH JULY 2024 / Time : 02:00 PM - 04:00 PM, TRACK- 4: Bio-Technology",
      details: [
        { sno: 1, paperid: 31, title: "" },
        { sno: 2, paperid: 32, title: "" },
        { sno: 3, paperid: 33, title: "" },
        { sno: 4, paperid: 34, title: "" },
        { sno: 5, paperid: 35, title: "" },
        { sno: 6, paperid: 36, title: "" },
        { sno: 7, paperid: 37, title: "" },
        { sno: 8, paperid: 38, title: "" },
        { sno: 9, paperid: 39, title: "" },
        { sno: 10, paperid: 40, title: "" },
        
      ],
    },
    {
      id: 5,
      title: "Day-2: DATE : 26TH JULY 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 5: Healthcare Evaluation",
      details: [
        { sno: 1, paperid: 41, title: "" },
        { sno: 2, paperid: 42, title: "" },
        { sno: 3, paperid: 43, title: "" },
        { sno: 4, paperid: 44, title: "" },
        { sno: 5, paperid: 45, title: "" },
        { sno: 6, paperid: 46, title: "" },
        { sno: 7, paperid: 47, title: "" },
        { sno: 8, paperid: 48, title: "" },
        { sno: 9, paperid: 49, title: "" },
        { sno: 10, paperid: 50, title: "" },
        
      ],
    },
    {
      id: 6,
      title: "Day-2: DATE : 26TH JULY 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 6: Process Automation, Innovation and Mobile Communication",
      details: [
        { sno: 1, paperid: 51, title: "" },
        { sno: 2, paperid: 52, title: "" },
        { sno: 3, paperid: 53, title: "" },
        { sno: 4, paperid: 54, title: "" },
        { sno: 5, paperid: 55, title: "" },
        { sno: 6, paperid: 56, title: "" },
        { sno: 7, paperid: 57, title: "" },
        { sno: 8, paperid: 58, title: "" },
        { sno: 9, paperid: 59, title: "" },
        { sno: 10, paperid: 60, title: "" },
       
      ],
    },
    {
      id: 7,
      title: "Day-2: DATE : 26TH JULY 2024 / Time: 10:00 AM - 01:30 PM, TRACK- 7: Cybersecurity and Privacy",
      details: [
        { sno: 1, paperid: 61, title: "" },
        { sno: 2, paperid: 62, title: "" },
        { sno: 3, paperid: 63, title: "" },
        { sno: 4, paperid: 64, title: "" },
        { sno: 5, paperid: 65, title: "" },
        { sno: 6, paperid: 66, title: "" },
        { sno: 7, paperid: 67, title: "" },
        { sno: 8, paperid: 68, title: "" },
        { sno: 9, paperid: 69, title: "" },
        { sno: 10, paperid: 70, title: "" },

      ],
    },
    {
      id: 8,
      title: "Day-2: DATE : 26TH JULY 2024 / Time : 01:30 PM - 03:00 PM, TRACK- 8: Communication and Advancement",
      details: [
        { sno: 1, paperid: 71, title: "" },
        { sno: 2, paperid: 72, title: "" },
        { sno: 3, paperid: 73, title: "" },
        { sno: 4, paperid: 74, title: "" },
        { sno: 5, paperid: 75, title: "" },
        { sno: 6, paperid: 76, title: "" },
        { sno: 7, paperid: 77, title: "" },
        { sno: 8, paperid: 78, title: "" },
        { sno: 9, paperid: 79, title: "" },
        { sno: 10, paperid: 80, title: "" },
      
      ],
    },
    {
      id: 9,
      title: "Day-2: DATE : 26TH JULY 2024 / Time: 01:30 PM - 03:00 PM, TRACK- 9: Technologies for Logic and Computing",
      details: [
        { sno: 1, paperid: 81, title: "" },
        { sno: 2, paperid: 82, title: "" },
        { sno: 3, paperid: 83, title: "" },
        { sno: 4, paperid: 84, title: "" },
        { sno: 5, paperid: 85, title: "" },
        { sno: 6, paperid: 86, title: "" },
        { sno: 7, paperid: 87, title: "" },
        { sno: 8, paperid: 88, title: "" },
        { sno: 9, paperid: 89, title: "" },
        { sno: 9, paperid: 90, title: "" },
      ],
    },
  ];

  const handleClick = (t) => setSelectedTrack(t);

  return (
    <>
      <div className="mt-44 md:mt-96"></div>
      <Imageplacer name="Schedule" />
      <h1 className='text-2xl md:text-5xl text-center font-bold text-[#87A2FF] mt-16'>Tracks</h1>
      <div className="flex flex-col items-center border-2 border-[#87A2FF] p-10 m-4 md:m-16 md:mx-32 md:py-8 md:p-16">
        <div className="flex flex-col w-full ">
          {tracks.map((track) => (
            <div key={track.id} >
              <button
                onClick={() => handleClick(track)}
                className="m-2 bg-[#FFF4B5] text-xs md:text-xl hover:bg-[#87A2FF] hover:text-white font-bold py-2 px-4 rounded min-w-full"
              >
                {track.title}
              </button>

              {/* Display track details if this track is selected */}
              {selectedTrack && selectedTrack.id === track.id && (
                <div className="mt-4 w-full flex flex-col items-center">
                  {/* <h2 className="text-xs md:text-xl font-bold mb-4">{selectedTrack.title}</h2> */}
                  <div className="overflow-x-auto w-full flex justify-center">
                    <table className="text-left table-auto border-collapse border-2 border-[#4F709C]">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFF4B5] text-bold text-xs md:text-xl border-[#4F709C]">S.No.</th>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFF4B5] text-bold text-xs md:text-xl border-[#4F709C]">Paper Id</th>
                          <th className="px-4 py-2 border text-[#16325B] bg-[#FFF4B5] text-bold text-xs md:text-xl border-[#4F709C]">Title</th>
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
