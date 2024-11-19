import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import imageplacer from '../imageplacer/page';

const Dates = () => {
  return (
    <div>
        <div className="px-10 lg:px-20 lg:pb-20">
          <h1 className="text-2xl lg:text-5xl text-[#227B94] px-4 pt-4 font-bold">Important Dates</h1>
          <hr className="h-1 my-4 bg-[#227B94] border-0 " />
          <ul className="text-sm lg:text-xl  space-y-4">
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
               <span>30th June 2025 - Start of Registration with Final Paper Submission</span>
             </li>
           </ul>

        </div>

    </div>
  )
}

export default Dates
