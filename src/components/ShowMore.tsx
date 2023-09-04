import React, { FC, MouseEventHandler } from "react";

interface MyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ShowMore: FC<MyButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <a className="relative inline-block text-lg group ">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white max-sm:drop-shadow-lg">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-14 sm:bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative font-mons">Show more</span>
        </span>
        <span
          className="absolute bottom-0 right-0 max-sm:bg-white w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-full"
        ></span>
      </a>
    </button>
  );
};

export default ShowMore;
