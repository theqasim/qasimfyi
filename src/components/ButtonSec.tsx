import React, { useEffect, useState } from 'react';

const ButtonSec = () => {
  return (
    <div className="flex justify-center gap-3 ">
      <a href="/resources/assets/MQasimCV.pdf" target="_blank" className="relative inline-block text-lg group ">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white max-sm:drop-shadow-lg">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gray-50"></span>
          <span className="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-14 sm:bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative font-mons font-bold">Check out my CV</span>
        </span>
        <span
          className="absolute bottom-0 right-0 max-sm:bg-white w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-full"
        ></span>
      </a>
      <a
        onClick={(event) => {
          event.preventDefault();
          const target = document.querySelector('#contact');
          if (target !== null) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
        className="relative inline-block text-lg group"
        href=""
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white max-sm:drop-shadow-lg">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gray-50"></span>
          <span className="absolute left-0 w-56 h-56 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 sm:bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative font-mons font-bold">Contact me</span>
        </span>
        <span
          className="absolute bottom-0 max-sm:bg-white right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-full"
        ></span>
      </a>
    </div>
  );
};

export default ButtonSec;
