import React from 'react';
import Dates from '../components/dates/page';
import Imageplacer from '../components/imageplacer/page';
import { FaRegCalendarAlt } from "react-icons/fa";

const ImportantDates = () => {
  return (
    <>
      <div className="mt-44 lg:mt-92">
      {/* <Imageplacer name="Important Dates" /> */}
      <h1 className="text-2xl lg:text-5xl md:mt-96 lg:pt-10 pt-20 mt-44 lg:mb-0 mb-4 font-extrabold  text-center text-black">Important Dates </h1>
      {/* <Dates /> */}
      <div className='p-10 lg:m-10 m-4 flex flex-col items-center'>
              <ul className="text-base md:text-2xl space-y-4">
                <li className="flex items-center">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>2nd June 2025 - Deadline for Submission</span>
                </li>
                <li className="flex items-center">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>25th June 2025 - Acceptance Notification & Registrations</span>
                </li>
                <li className="flex items-center">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>30th June 2025 - Registration & Final Paper Submission</span>
                </li>
              </ul>
              </div>
      </div>
    </>
  );
};

export default ImportantDates;
