import React from 'react';
import Imageplacer from '../components/imageplacer/page';
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const contact = () => {
  const contact1 = [
    {
      id: 1,
      name: "Dr. G. Kalyani",
      ph: 8465930550,
    },
    {
      id: 2,
      name: "Dr. Y. Sandeep",
      ph: 9491757787,
    },
    {
      id: 3,
      name: "Dr. Jaya Prakash S",
      ph: 9848143200,
    },
    {
      id: 4,
      name: "Dr. Gargi M",
      ph: 8886599444,
    },
  ];

  return (
    <>
      <div className="mt-44 lg:mt-92 text-justify"></div>

      {/* <Imageplacer name="Contact Us"/> */}
      <h1 className="text-2xl lg:text-5xl md:mt-96 lg:pt-10 pt-20 mt-44 lg:mb-0 mb-4 font-extrabold text-center text-black">
        Contact us
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:mx-32 lg:mb-32 m-20 lg:mx-16 mx-10">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold pb-5 text-center flex items-center justify-center">
            <IoLocationOutline className="mr-3" />
            Our Location
          </h1>
          <p className="text-lg lg:text-2xl text-center">
            Velagapudi Ramakrishna Siddhartha Engineering College,
            <br />
            Chalasani Nagar, Kanuru,
            <br />
            Vijayawada, Andhra Pradesh 520007.
          </p>
        </div>
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold pb-5 text-center">
            Drop us a Line
          </h1>
          <div className="text-base lg:text-2xl">
            {contact1.map((c1) => (
              <li key={c1.id} className="flex items-center">
                <IoCallOutline className="mr-3" />
                {c1.name} - {c1.ph}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
