import React from "react";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowLeftStartOnRectangle,
} from "react-icons/hi2";

const InOutIcon = ({ isIn }: { isIn: boolean }) => {
  return (
    <div className='flex flex-col w-12 h-12 items-center justify-center'>
      {isIn ? (
        <>
          <div className='-rotate-90 text-blue-500'>
            <HiOutlineArrowLeftOnRectangle size='1.6em' />
          </div>
          <div className='text-xs text-gray-500'>Masuk</div>
        </>
      ) : (
        <>
          <div className='rotate-90 text-red-700'>
            <HiOutlineArrowLeftStartOnRectangle size='1.5em' />
          </div>
          <div className='text-xs text-gray-500'>Keluar</div>
        </>
      )}
    </div>
  );
};

export default InOutIcon;
