import React from 'react';
import Image from 'next/image';
const Imageplacer = ({name}) => {
  return (
    <div className="">
    <div
    className="absolute  w-full lg:h-full h-1/3 bg-cover bg-center z-0 sm:block md:block lg:block"
    style={{
        backgroundImage: `url('images/vrsec1.jpeg')`, 
    }}>
    
    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>
   </div>
    <div  className='relative flex flex-col justify-center min-h-72 lg:min-h-screen '>
        <div>
    <h1 className="text-2xl lg:text-5xl  font-extrabold  text-center text-white">{name} </h1>
    </div>
    </div>
    
    </div>
  )
}

export default Imageplacer
