import React from 'react';

function MeditationBanner() {
  return (
    <div className="bg-gray-50 font-[sans-serif] relative w-full shadow-lg shadow-blue-50 mx-auto rounded overflow-hidden">
      <div className="grid sm:grid-cols-2 max-sm:gap-4 w-full">
        <div className="text-center p-4 flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-4xl text-blue-200 leading-tight">
            <span className="text-gray-800">Mes</span> meditations
          </h3>
          <h6 className="text-md text-gray-800 mt-2">
            Discover amazing discounts, for limited time
          </h6>
        </div>
        <div className="flex justify-end items-center p-2 pr-11 bg-gradient-to-b from-blue-200 to-blue-100 rounded-bl-[230px] w-full h-full">
          <div className="h-52 w-52 rounded-full bg-gradient-to-tr from-blue-400 to-blue-50 p-4 ">
            <img
              src="https://readymadeui.com/team-image.webp"
              className="w-full h-full rounded-full object-cover border-8 border-white"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="absolute -top-[40px] -left-[40px] w-24 h-24 rounded-full bg-blue-400 opacity-40 shadow-lg" />
      <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-blue-200 opacity-40 shadow-lg" />
    </div>
  );
}

export default MeditationBanner;