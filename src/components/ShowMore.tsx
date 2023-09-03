import React, { FC, MouseEventHandler } from "react";

interface MyButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ShowMore: FC<MyButtonProps> = ({ onClick }) => {
  return (
    // <button
    //   type="button"
    //   className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    //   onClick={onClick}
    // >
    //   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    //     Show more
    //   </span>
    // </button>
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

// MyButton.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default ShowMore;
