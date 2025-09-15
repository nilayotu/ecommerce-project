import React from 'react';

const WorkWithUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Blue background */}
      <div className="basis-full md:[flex-basis:70%] flex flex-col justify-center bg-[#2A7CC7] px-6 sm:px-12 lg:px-20 md:py-12 py-24 text-center md:text-left items-center md:items-start">
      <p className="text-lg px-16 font-medium font-bold text-white mb-4">
        WORK WITH US
      </p>
      <h2 className="text-4xl px-16 md:text-6xl font-bold text-white mb-6 leading-snug">
        Now Let's grow Yours
      </h2>
      <p className="md:text-lg px-16 text-sm mb-8 text-white font-semibold leading-relaxed">
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </p>
      <button className="border-2 ml-16 font-semibold border-white px-12 rounded-lg md:py-4 py-3 text-white w-fit">
        Button
      </button>
    </div>
      
      {/* Right side - Image */}
      <div className="basis-full md:[flex-basis:30%] flex items-center hidden md:flex">
        <img 
          src="/assets/workwithus.jpg"
          alt="Woman in coral sweater" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default WorkWithUsSection;