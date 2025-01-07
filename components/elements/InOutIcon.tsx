import React from "react";
import { ImArrowDown } from "react-icons/im";

const InOutIcon = ({ isIn }: { isIn: boolean }) => {
  return (
    <div className='flex flex-col w-fit h-fit items-center justify-center'>
      {isIn ? (
        <>
          <div className=' text-gray-600 mb-1'>
            <ImArrowDown size='2em' />
          </div>
          <div className='text-sm font-medium text-gray-500'>Masuk</div>
        </>
      ) : (
        <>
          <div className='rotate-180 text-gray-600 mb-1'>
            <ImArrowDown size='2em' />
          </div>
          <div className='text-sm  font-medium text-gray-500'>Keluar</div>
        </>
      )}
    </div>
  );
};

export default InOutIcon;
