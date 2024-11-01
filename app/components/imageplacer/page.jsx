import React from 'react';
import Image from 'next/image';
const Imageplacer = ({name}) => {
  return (
    <div className="md:min-h-screen">
        <div
    className="absolute  w-full h-[50vh] md:h-[80vh] bg-cover bg-center z-0 sm:block md:block lg:block"
    style={{
        backgroundImage: `url('images/vrsec1.jpeg')`, 
    }}>
    
    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>
   </div>
    <div  className='relative flex flex-col justify-center min-h-72 md:min-h-screen '>
        <div>
    <h1 className="text-2xl md:text-7xl  font-extrabold  text-center text-white">{name} </h1>
    </div>
    </div>
    
    </div>
  )
}

export default Imageplacer
