import React from 'react'
import Imageplacer from '../components/imageplacer/page'
import { IoCallOutline } from "react-icons/io5";
const contact = () => {
  const contact1 =[
    {
      "id": 1,
      "name":"Dr .G .Kalyani",
      "ph": 8465930550,
    },
     {
      "id": 2,
      "name":"Dr .Y .Sandeep",
      "ph": 9491757787,
    },
    {
      "id": 3,
      "name":"Dr. Jaya Prakash S",
      "ph": 9848143200,
    },
    {
      "id": 4,
      "name":"Dr. Gargi M",
      "ph":8886599444,
    },
    
  ]
  return (
    <>
    <div className="mt-44 lg:mt-96"></div>

    <Imageplacer name="Contact Us"/>
    <div className='flex felx-col lg:flex-row justify-center gap-10 m-32 '>
      <div>
         <h1 className='text-2xl lg:text-5xl font-bold pb-5'>Our Location</h1>
         <p className='text-lg lg:text-2xl '>Velagapudi Ramakrishna Siddhartha Engineering College,<br />
          Chalasani Nagar,<br />
          Kanuru,<br />
          Vijayawada, Andhra Pradesh 520007.</p>
      </div>
      <div>
      <h1 className='text-2xl lg:text-5xl font-bold pb-5'>Drop Us a Line</h1>
         <p className='text-lg lg:text-2xl '>
          {contact1.map((c1)=>{
           return( <li key={c1.id} className="flex items-center"><IoCallOutline className='mr-3' />{c1.name} - {c1.ph}</li>
         ) })}
        
         </p>
      </div>
    </div>
    </>
  )
}

export default contact
