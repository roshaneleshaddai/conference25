import React from 'react';

// Sample data for city attractions
const attractions = [
  {
    name: 'Bhavani Island',
    image: 'https://media.andhrajyothy.com/media/2024/20240306/Bhavani_Island_1_31e28da876.jpg',
    description:
      'Bhavani Island is located amidst the Krishna river and is spread across an area of 133 acres. The island houses the Kanaka Durga Devi Temple and is therefore referred to as the Bhavani Island. This is among the must-see places in Vijayawada.',
  },
  {
    name: 'Undavalli Caves',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-undavalli-caves-guntur-andhra-pradesh-attr-hero?qlt=82&ts=1726743723061',
    description:
      'Undavalli Caves are one of the finest examples of Indian rock-cut architecture. These caves are said to be carved out of sandstone in the 4th or 5th century BCE. A visit to these caves should definitely be on your itinerary when you visit Vijayawada.',
  },
  {
    name: 'Kondapalli Fort',
    image: 'https://i.ytimg.com/vi/jI4N2lAr5LA/maxresdefault.jpg',
    description:
      'Kondapalli Fort is located towards the west of Kondapalli and built by the Musunuri Nayaks. This fort changed hands between the Bahamani Sultanate, Vijayanagara Empire and the British East India Company since it was established. The fort is marvellously constructed using granite and other materials.',
  },
  {
    name: 'Prakasam Barrage Near Vijayawada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Prakasam_Barrage_from_Vijayawada_to_Guntur_2_%28November_2018%29.jpg',
    description:
      'If you think that Vijayawada is only filled with ancient architectural buildings and sights, then you might have to take a look at the Prakasam Barrage. An example of contemporary architectural brilliance is this site. It is an iconic bridge that links the district of Krishna and Guntur.',
  },
  {
    name: 'Hamsaladeevi Beach',
    image: 'https://explorebyroad.blog/wp-content/uploads/2020/11/IMG_4653-1568x1176.jpg',
    description:
      'Hamsaladeevi Beach is one of the most important tourist attractions of the place where the River Krishna meets the mighty Bay of Bengal. The pristine beach is devoid of the commercial crowds and hence offers the much needed peace and calm. Surrounded by green paddy fields and lined by tall palm trees, Hamsaladeevi Beach is an ideal weekend getaway from the chaos and hustle bustle of the city.',
  },
];

const Attractions = () => {
  return (
    <>
      <div className="mt-44 md:mt-96"></div>
      <div className="p-6">
        <div className="flex flex-col gap-12 md:m-24">
          <h1 className="text-5xl font-bold mb-6">Vijayawada Attractions</h1>
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-4 border border-gray-300 rounded-lg p-4 shadow-sm`}
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="md:w-96 md:h-96 w-52 h-52 rounded-md object-cover"
              />
              <div className="text-center md:text-left">
                <h2 className="md:text-4xl text-lg font-semibold mb-2">{attraction.name}</h2>
                <p className="text-gray-600 md:text-xl text-xs text-justify ">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Attractions;
