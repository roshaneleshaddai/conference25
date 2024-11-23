import React from 'react';
import Imageplacer from '../components/imageplacer/page';

const committees = () => {
  const committeeData = [
    {
      title: "Chief Patron",
      members: ["Sri K. V Chowdary, IRS, Chancellor, VRSEC"],
    },
    {
      title: "Patrons",
      members: [
        "Dr. C. Nageswara Rao, President, SAGTE",
        "Sri P. Lakshmana Rao, Secretary, SAGTE",
        "Sri M. Rajaiah, Vice-President, SAGTE",
        "Prof. P. Venkateswara Rao, Vice Chancellor, VRSEC",
        "Prof. A. V. Ratna Prasad, Pro-Vice Chancellor, VRSEC",
      ],
    },
    {
      title: "Honorary Chair",
      members: [
        "Dr. Suresh Chandra Satapathy, Director (Doctoral Research and Publications), KIIT (Deemed to be University)",
      ],
    },
    {
      title: "Conference Chair",
      members: ["Prof. E. Laxmi Lydia, Professor, Department of Information Technology, VRSEC"],
    },
    {
      title: "Program Chair",
      members: [
        "Prof. M. Suneetha, Professor & DEAN – Research, Technology Development & IQAC, VRSEC",
        "Prof. D. Rajeswara Rao, Professor & DEAN – Industry Relations, Training & Placements, VRSEC",
      ],
    },
    {
      title: "Publication Chair",
      members: ["Dr. Vikrant Bhateja, Veer Bahadur Singh Purvanchal University"],
    },
    {
      title: "Conveners",
      members: [
        "Prof. T. Anuradha, Professor, IT, VRSEC",
        "Prof. K. Srinivas, Professor, CSE, VRSEC",
        "Prof. K. Suvarna Vani, Professor, CSE, VRSEC",
        "Dr. K. Sita Kumari, Associate Professor, IT, VRSEC",
        "Dr. S. Suhasini, Associate Professor, IT, VRSEC",
        "Dr. G. Kalyani, Associate Professor, IT, VRSEC",
      ],
    },
    {
      title: "Co-Conveners",
      members: [
        "Dr. Y. Sandeep, Assistant Professor, IT, VRSEC",
        "Dr. M. Gargi, Assistant Professor, IT, VRSEC",
        "Dr. P. Ravi Sankar, Sr. Assistant Professor, CSE, VRSEC",
        "Dr. N. Sravani, Assistant Professor, CSE, VRSEC",
      ],
    },
    {
      "title": "Editorial Committee",
      "members": [
        "Prof. M. Suneetha, Professor & Dean – Research, Technology Development & IQAC, VRSEC, India",
        "Dr. Naif Almakayeel, Associate Professor, Industrial Engineering, King Khalid University",
        "Prof. K. Srinivas, Professor, CSE, VRSEC, India",
        "Prof. K. Suvarna Vani, Professor, CSE, VRSEC, India",
        "Prof. E. Laxmi Lydia, Professor, IT, VRSEC, India",
        "Dr. G. Kalyani, Associate Professor, IT, VRSEC, India",
        "Dr. Elvir Munirovich Akhmetshin, Department of Economics and Management, Elabuga Institute, Kazan Federal University, Kazan, Russia",
        "Dr. Cheng Cheng, Professor, Computer Science, Swansea University, UK",
        "Dr. Rabia Emhamed Al Mamlook, Department of Business Administration, Trine University, USA",
        "Abeer Aljohani, Department of Computer Science, Applied College, Taibah University, Medina 42353, Saudi Arabia",
        "Ming Yang, Ph.D., Professor, Department of Information Technology, College of Computing and Software Engineering, Kennesaw State University - Marietta Campus",
        "Dr. V. Radhesyam, Senior Assistant Professor, IT, VRSEC, India"
      ]
    },
    {
      "title": "Publicity Committee",
      "members": [
        "Dr. S. Jaya Prakash, Assistant Professor, IT, VRSEC",
        "Dr. Ch. Subba Reddy, Assistant Professor, IT, VRSEC",
        "Mr. Y. Kalyan Chakravarti, Assistant Professor, IT, VRSEC",
        "Ms. G. Geetha, Assistant Professor, IT, VRSEC",
        "Ms. K. Madhavi, Assistant Professor, IT, VRSEC",
        "Ms. S. Kranthi, Assistant Professor, IT, VRSEC",
        "Mr. Ch. Nanda Krishna, Assistant Professor, IT, VRSEC",
        "Mr. S. Ravi Kishan, Associate Professor, CSE, VRSEC",
        "Dr. P. Ramesh Kumar, Associate Professor, CSE, VRSEC",
        "Dr. K. Praveen Kumar, Associate Professor, CSE, VRSEC",
        "Dr. G. Kranti Kumar, Sr. Assistant Professor, CSE, VRSEC",
        "Mr. A. Raghuvira Pratap, Assistant Professor, CSE, VRSEC",
        "Mr. Ch. Mukesh, Assistant Professor, CSE, VRSEC",
        "Mr. N. Sunny, Assistant Professor, CSE, VRSEC",
        ]
    },    
    {
      title: "Advisory Committee",
      members: [
        "Dr. B. Panduranga Rao, Professor, Civil Engineering, Director Infrastructure & Consultancy, VRSEC",
        "Dr. M. Ravichand, Professor, English, Registrar, VRSEC",
        "Dr. Ch. Srinivas, Professor, Civil Engineering, Dean Planning, Monitoring & Alumni Affairs (PMAA), VRSEC",
        "Dr. B. Raghava Rao, Professor, Mechanical Engineering, Dean Academics, VRSEC",
        "Dr. P. V. R. L. Narasimham, Professor, Electrical & Electronics Engineering, Dean Examinations & Evaluation, VRSEC",
        "Dr. D. Rajeswara Rao, Professor, Computer Science & Engineering, Dean Industry Relations, Training & Placements, VRSEC",
        "Dr. M. Suneetha, Professor, Information Technology, Dean Research, Technology Development & IQAC, VRSEC",
        "Dr. A. Vittaleswar, Professor, School of Management, Dean School of Management & In-charge for Schools of Law, Sciences, Arts & Commerce, VRSEC",
        "Dr. G. N. Swamy, Professor, Electronics & Instrumentation Engineering, Dean Student Affairs & Admissions, VRSEC",
        "Dr. D. Venkata Rao, Professor, Electronics & Communication Engineering, Dean Velagapudi Ramakrishna Siddhartha School of Engineering, VRSEC",
        "Dr. T. Anuradha, Professor, Information Technology, Controller of Examination, VRSEC",
        "Mr. M. V. Saibabu, Deputy Registrar, VRSEC",
      ],
    },    
    {
      title: "International Advisory Committee",
      members: [
        "Prof. Ilyos Sultanovich Abdullayev, Faculty of Social and Economic Sciences, Department of Business and Management, Urgench State University, Urgench, Uzbekistan",
        "Dr. Ali Almuflih, Associate Professor & Head, Industrial Engineering, King Khalid University",
        "Dr. Abdullah Alfatais, Assistant Professor, Industrial Engineering, King Khalid University",
        "Dr. Elvir Munirovich Akhmetshin, Department of Economics and Management of Elabuga Institute, Kazan Federal University, Kazan, Russia",
        "Dr. Rabia Emhamed Al Mamlook, Department Business Administration, Trine University, USA",
        "Department of Industrial and Mechanical Engineering, Al-Zawia University",
        "Prof. Vicente Garcia, School of Information Technology, University of Ovidio, Spain",
        "Dr. Khalid M.O. Nahar, Faculty of Computer Studies, Arab Open University, Riyadh 11681, Saudi Arabia",
        "Dr. Naif Almakayeel, Associate Professor, Industrial Engineering, King Khalid University",
        "Abeer Aljohani, Department of Computer Science, Applied College, Taibah University, Medina 42353, Saudi Arabia",
        "Mohammad Aljaidi, Department of Computer Science, Zarqa University, Zarqa 13110, Jordan",
        "Ming Yang, Kennesaw State University, Atlanta, USA",
        "Bhupesh Kumar Dewangan, OP Jindal University, Raigarh, India",
        "Sanjay Misra, Covenant University, Ota, Nigeria",
        "Milos Stojmenovic, Singidunum University, Serbia",
        "Georgios Tsaramirsis, Higher Colleges of Technology, Abu Dhabi",
        "Sven Groppe, University of Lübeck, Germany",
        "Mohammad Yamin, Abdulaziz University, Jeddah, Saudi Arabia",
        "Mukesh Misra, Massey University, New Zealand",
        "Neha Mohanty, Department of Computer Science & Engineering, New Jersey Institute of Technology, USA",
        "Jinghua Groppe, University of Lübeck, Germany",
        "Abdulrhman Alshareef, King Abdulaziz University",
        "Vicente Garcia Diaz, University Oviedo, Spain",
        "Oscar Castillo, Tijuana Institute Technology, Mexico",
        "J. P. Das, University of Alberta, Canada",
      ],
    },
    
    {
      title: "National Advisory Committee",
      members: [
"Shri Chelikani V T E V Prasad Rao ,Delivery Head (QA, Niche technologies – API,Integration (Boomi, Mulesoft), RPA, Bigdata, AMS )",
"Shri Rakesh Prudhvi Kasthuri,Technical Lead, Google ",
"Dr. R.Padmavathy,Associate Professor, Dept. of CSE,NIT Warangal, Telangana.",
"Dr. Srilatha Chebrolu,Assistant Professor, Department of Computer Science and Engineering,National Institute of Technology Andhra Pradesh, Tadepallegudem",
"Sireesh Chigurupati, Principal System Engineer- Cloud Operations National",
"Prof Siba K Udgata, School of Computers and Information Science,University of Hyderabad.", 
"Dr Girish S Pujar,Scientist SG & Head, Land Use and Cover Monitoring Division (LU&CMD),National Remote Sensing Centre (ISRO), Hyderabad", 
"Dr T Ramakrishnudu,Associate Professor, Department of Computer Science and Engineering,National Institute of Technology,Warangal",
"Shri Subramaniam, TCS",
"Ms.Hiranmai Chamarthi, Application Developer, IBM",
"Mrs.Dedeepya Anagani, Senior Consultant, Deloitte",
"Ms.Satyavathi, senior software engineer, cloudera pvt limited ",
"Mr.S.SaiRaghavendra Krishna Kiriti, Associate Consultant, Microsoft", 
"Mr.V.N.V.Srikanth, Dev Ops Engineer, Amazon Development Centre",
      ],
    },
    {
      title: "Technical Review Committee",
      members: [
        "Gourav Gupta, Massey University, Palmerston North, New Zealand",
        "Lal Hussain, University of Jazad Ammu and Kashmir, Pakistan",
        "Maria Avilés, Gijon Hospital, Asturias, Spain",
        "Izzat Al-Darraji, University of Baghdad, Baghdad",
        "Lie Li, Kennesaw State University, Atlanta, USA",
        "Abdulsattar Abdullah Hamad, University of Samarra, Iraq",
        "Rajkumar Singh Rathore, Cardiff Met University, London, UK",
        "Osamah Ibrahim Khalaf, Department of Solar, Al-Nahrain Research Center for Renewable Energy, Al-Nahrain University, Jadriya, Baghdad, Iraq",
        "Osamah Ibrahim Khalaf, Department of Solar",
        "Ghaida Muttashar Abdulsahib, University of Technology, Baghdad, Iraq",
        "Sameer Algburi, Al-Kitab University, Iraq",
        "Habib Hamam, Faculty of Engineering, Uni de Moncton, Canada",
        "Dr Junali Jasmine Jena, KIIT University, Bhubaneswar",
      ],
    },
    
  ];

  const half = Math.ceil(2*committeeData.length / 3);
  const leftColumn = committeeData.slice(0, half);
  const rightColumn = committeeData.slice(half);

  return (
    <>
      <div className="mt-48 lg:mt-92 text-justify">
      {/* <Imageplacer name="Committees" /> */}
      <h1 className="text-2xl lg:text-5xl md:mt-96 lg:pt-10 pt-20 mt-44 lg:mb-0 mb-4 font-extrabold  text-center text-black">Committees</h1>
      <div className="px-6 lg:py-10 py-5 lg:mt-5 mt-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftColumn.map((committee, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-tr-[4rem] rounded-bl-[4rem] p-6 border-l-4 border-[#87A2FF] animate-swipeInLeft"
              >
                <h2 className="lg:text-2xl text-xl font-semibold text-black mb-4">
                  {committee.title}
                </h2>
                <ul className="list-disc list-outside space-y-2 lg:pl-8 pl-6 text-gray-900 lg:text-lg text-base">
                  {committee.members.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-8">
            {rightColumn.map((committee, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-tr-[4rem] rounded-bl-[4rem] p-6 border-l-4 border-[#87A2FF] animate-swipeInRight"
              >
                <h2 className="lg:text-2xl text-xl font-semibold text-black mb-4">
                  {committee.title}
                </h2>
                <ul className="list-disc list-outside space-y-2 lg:pl-8 pl-6 text-gray-900 lg:text-lg text-base">
                  {committee.members.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default committees;
