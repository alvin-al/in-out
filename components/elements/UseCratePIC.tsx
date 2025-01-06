import React from "react";
import Link from "next/link";
import { IoPeople } from "react-icons/io5";

const UseCratePIC = () => {
  return (
    <Link href='/crate-detail'>
      <div
        className={`h-fit bg-gray-300 rounded-xl flex p-8 flex-wrap gap-5 items-center justify-between`}
      >
        <div className='flex text-gray-500 gap-4 w-1/2'>
          <div className=''>
            <IoPeople size='3em' />
          </div>
          <div className='text-xl font-medium'>PIC yang Membawa Kerat</div>
        </div>
        <div>
          <div className='text-6xl font-semibold flex'>
            4 <span className='self-end mb-1 ml-2 text-lg'>Orang</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UseCratePIC;
