import React from 'react';
import Dates from '../components/dates/page';
import Imageplacer from '../components/imageplacer/page';

const ImportantDates = () => {
  return (
    <>
      <div className="mt-44 lg:mt-96"></div>
      <Imageplacer name="Important Dates" />
      <Dates />
    </>
  );
};

export default ImportantDates;
