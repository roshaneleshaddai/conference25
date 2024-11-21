import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Imageplacer from '../components/imageplacer/page';


const Regi = () => {
  const bankDetails = [
    { label: "Name of the Bank", value: "CANARA BANK" },
    { label: "Name of the Account Holder", value: "Principal, V.R.Siddhartha Engineering College" },
    { label: "Account Type", value: "Savings Bank" },
    { label: "Account Number", value: "33672200004978" },
    { label: "Bank Branch IFSC Code", value: "CNRB0013367" },
    { label: "MICR No.", value: "520015027" },
    { label: "Bank Branch Address", value: "VRS ENGG COLLEGE, KANURU, VIJAYAWADA - 520007" },
    { label: "SWIFT CODE", value: "CNRBINBBBFD" },
    { label: "COLLEGE PAN", value: "AABTS1271J" },
    { label: "COLLEGE GST NO.", value: "37AABTS1271J4ZA" },
    { label: "Institution Permanent ID", value: "1-10213343" },
    { label: "PFMS Unique code", value: "VRSEC" },
  ];

  return (
    <div className="relative font-SUSE  flex-col items-center justify-center p-4">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-center">For Payment</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 bg-gray w-full">
        <div className="flex flex-col lg:flex-row md:gap-10 items-center justify-evenly mb-6">
          <div><Image
            src="/images/1.png"
            width={300}
            height={300}
            alt="registration QR code"
            className="mb-4 md:mb-0 md:mr-6"
          /></div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-2 ">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-300 text-left">Detail</th>
                  <th className="px-4 py-2 border-b-2 border-gray-300 text-left">Information</th>
                </tr>
              </thead>
              <tbody>
                {bankDetails.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-2 border-b border-gray-200 font-semibold">{item.label}</td>
                    <td className="px-4 py-2 border-b border-gray-200">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const author_info = () => {
  return (
    <div className="md:mt-92 mt-44">
      <Imageplacer name="Author Info" />
{/* <p className="p-5 font-bold text-center text-black bg-[url('https://img.freepik.com/free-vector/medical-tech-background-with-hexagon-pattern_107791-30275.jpg?t=st=1728633368~exp=1728636968~hmac=cc61870f5b73b9658f533c2c416a8ea48ba36cc9240850a2ac53f2d998d5d902&w=1380')] bg-opacity-25 text-4xl">
      AUTHOR INFO
      </p> */}

  {/* <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  \n\nul, li{\n  list-style: none;\n  padding: 0;\n}\n\n.wrapper{\n  background: #eaf6ff;\n  padding: 2rem;\n  border-radius: 15px;\n}\nh1{\n  font-size: 1.1rem;\n  font-family: sans-serif;\n}\n.sessions{\n  margin-top: 2rem;\n  border-radius: 12px;\n  position: relative;\n}\nli{\n  padding-bottom: 1.5rem;\n  border-left: 1px solid #abaaed;\n  position: relative;\n  padding-left: 20px;\n  margin-left: 10px;\n  &:last-child{\n    border: 0px;\n    padding-bottom: 0;\n  }\n  &:before{\n    content: '';\n    width: 15px;\n    height: 15px;\n    background: white;\n    border: 1px solid #4e5ed3;\n    box-shadow: 3px 3px 0px #bab5f8;\n    border-radius: 50%;\n    position: absolute;\n    left: -10px;\n    top: 0px;\n  }\n}\n.time{\n  color: #2a2839;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n}\np{\n  color: #4f4f4f;\n      font-family: sans-serif;\n  line-height: 1.5;\n  margin-top:0.4rem;\n}\n  "
    }}
  /> */}
  <div id='submission_guidelines' className='lg:m-0 lg:ml-10 flex lg:flex-row flex-col items-center justify-center'>
  <div className="bg-[#FFF4B5] p-8 rounded-[15px] lg:w-1/5">
    <h1 className='font-bold text-xl'> Contents of Author Info<br></br><span className='text-sm'> (click to navigate)</span> </h1>
    <ul className="mt-8 rounded-[12px] relative">
    <li className="relative pl-5 ml-2 pb-6 border-l border-solid border-[#abaaed] before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
      <div className="time">
        <Link
        href="#submission_guidelines"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Submission Guidelines</Link>
        </div>
        {/* <p>How is it already 9:00? Just how???</p> */}
      </li>
      <li className="relative pl-5 ml-2 pb-6 border-l border-solid border-[#abaaed] before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
        <div className="time"><Link
        href="#registration_id"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Registration</Link>
        </div>
        {/* <p>Few more minutes of sleep won't do anyone any harm ..</p> */}
      </li>
      <li className="relative pl-5 ml-2 pb-6 before:content-[''] before:w-4 before:h-4 before:bg-white before:border-2 before:border-solid before:border-[#4e5ed3] before:shadow-[3px_3px_0px_#bab5f8] before:rounded-full before:absolute before:-left-2 before:top-0">
        <div className="time"><Link
        href="#visa_guidelines"
        className={`cursor-pointer text-lg hover:text-xl m-1 border-[#1A1A1A]  font-semibold transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg`}
        >Visa Guidelines</Link>
        </div>
        {/* <p>Get up </p> */}
      </li>
    </ul>
  </div>
  
  <div className='lg:w-4/5 bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-14 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Submission Guidelines</h1>
      <p className='md:text-xl text-md'>Submissions prepared as per Springer template should be submitted to the following link.
      </p>
      <div className='flex lg:flex-row flex-col py-2 items-center'>
      <div className='py-5 lg:pr-5'>
        <Image
          src="https://rdconclave25.org/_next/image?url=%2Fimages%2Fspringer.png&w=256&q=75"
          alt="springer"
          width={250} 
          height={250} 
          objectFit="cover"
          className=''
          /></div>
      <div className='md:text-xl text-md p-2'>The proceedings of ICICC-2025 will be published in the Springer Book series “Lecture Notes in Networks and Systems (LNNS)”, which will be Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in Web of Science.</div>
      </div>

      <h1 className='md:text-2xl text-xl font-bold pb-2 text-center'>Paper Submission: <span> </span>
        <span >
        <Link
        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Click here
        </Link>
        </span></h1>

      <div className='md:text-xl text-md p-2'><p>All submissions must comply with the Springer Policy : Click below to download</p>
      <p className='p-2'><Link
        href="/wordTemplateSpringer.zip"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Microsoft Word Format
      </Link></p>
      <p className='p-2'><Link
        href="/LateXTemplateSpringer.zip"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>LateX Format
      </Link></p>
      <p className='py-2'>Before submission, <span><Link
        href="https://www.springer.com/de/authors-editors/editors/publishing-ethics-for-journals/4176"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>click here to read the Springer publication ethics and guidelines.
      </Link></span></p>
      <p id='registration_id' className='py-2'>Paper Submission Deadline: 15th July 2025</p>
      </div>
      </div>

  </div>

  {/* <div className='flex flex-col items-center'>
      <div className='w-1/2 bg-[#FFF4B5] rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-5 px-8 py-5 m-2'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2 text-center'>Paper Submission: <span> </span>
        <span >
        <Link
        href="#"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Click here
        </Link>
        </span></h1>
      </div>
      </div> */}

      {/* <div className='lg:hidden bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 m-8'>
       <h1 className='md:text-3xl text-2xl font-bold pb-2'>Theme of the conference</h1> 
      <p className='md:text-xl text-md'>Submissions prepared as per Springer template should be submitted to the following link.
      </p>
      <div className='flex flex-col py-2 items-center'>
      <div className='py-5 lg:pr-5'><Image
          src="https://rdconclave25.org/_next/image?url=%2Fimages%2Fspringer.png&w=256&q=75"
          alt="springer"
          width={250} 
          height={250} 
          objectFit="cover"
          className=''
          /></div>
      <div className='md:text-xl text-md p-2'>The proceedings of ICICC-2025 will be published in the Springer Book series “Lecture Notes in Networks and Systems (LNNS)”, which will be Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in Web of Science.</div>
      </div>
      </div> */}

      {/* <div className='bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 m-8'> */}
      {/* <h1 className='md:text-3xl text-2xl font-bold pb-2'>Scope and Interests</h1> */}
      {/* <div className='md:text-xl text-md p-2'><p>All submissions must comply with the Springer Policy : Click below to download</p>
      <p className='p-4'><Link
        href="#"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Microsoft Word Format
      </Link></p>
      <p className='p-4'><Link
        href="#"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>LateX Format
      </Link></p>
      <p className='py-2'>Before submission, <span><Link
        href="#"
        className='text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>click here to read the Springer publication ethics and guidelines.
      </Link></span></p>
      <p className='py-2'>Paper Submission Deadline: 15th July 2024</p>
      </div>
      </div> */}
      
      <div className='bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 md:mt-0 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Registration</h1>
        <Regi/>
      </div>

      <div className='bg-white shadow-xl border-2 border-black/10 rounded-tr-[4rem] rounded-bl-[4rem] md:px-20 md:py-10 md:m-20 px-8 py-5 m-8'>
      <h1 className='md:text-3xl text-2xl font-bold pb-2'>Visa Guidelines</h1>
      <p className='md:text-xl text-md py-2'>A conference visa is a type of travel permit issued by the government of the country where you want to travel to attend conferences. It allows foreign nationals to enter and stay within their country for a limited time period to participate in conferences, seminars, workshops, or similar events.</p>
        <p className='md:text-xl text-md py-2'>Conference VISA guidelines for India can be accessed using the official link of Government of India</p>
        <p className='py-10'>
        <Link
        href="https://www.mha.gov.in/sites/default/files/2022-07/ForeigD-FAQs-on-ConferenceVisa.pdf"
        className='md:text-xl text-md text-[#FF6600] cursor-pointer underline underline-offset-8 decoration-indigo-500 hover:underline hover:decoration-4'>Click here to visit the official website
        </Link>
        </p>
      </div>

    </div>
  )
}

export default author_info
