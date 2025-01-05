import React from "react";
import { FaBoxes } from "react-icons/fa";

const Card = () => {
  return (
    <div className='w-1/2  bg-gray-300 rounded-xl flex px-4 py-8 items-center'>
      <div className=''>
        <div className='text-gray-500 ml-1 mb-1'>
          <FaBoxes size='1.6em' />
        </div>
        <div className='text-gray-500 '>Jumlah Kerat</div>
        <div className='text-5xl font-semibold flex items-start'>
          50 <span className='text-xs mt-1 ml-1'>Buah</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
