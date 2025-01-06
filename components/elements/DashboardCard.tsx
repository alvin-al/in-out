import { CardProps } from "@/types";
import Link from "next/link";
import React from "react";

const DashboardCard = ({ icon, title, value, uom, className }: CardProps) => {
  return (
    <Link href='/crate-detail'>
      <div
        className={`${className} w-full h-fit bg-gray-300 rounded-xl flex p-8 flex-wrap gap-4`}
      >
        <div className='flex text-gray-500 gap-2'>
          <div className=''>{icon}</div>
          <div className='text-lg font-medium'>{title}</div>
        </div>
        <div>
          <div className='text-6xl font-semibold flex'>
            {value} <span className='self-end mb-1 ml-2 text-lg'>{uom}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
