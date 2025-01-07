import { CardProps } from "@/types";
import Link from "next/link";
import React from "react";

const DashboardCard = ({ icon, title, value, uom, className }: CardProps) => {
  return (
    <Link href='/crate-detail'>
      <div
        className={`${className} w-full min-h-48 rounded-xl flex p-4 flex-wrap`}
      >
        <div className='flex gap-2 flex-col'>
          <div className='ml-1'>{icon}</div>
          <div className='text-lg font-medium'>{title}</div>
        </div>
        <div>
          <div className='text-6xl font-semibold flex'>
            {value || "0"}{" "}
            <span className='self-end mb-1 ml-2 text-lg'>{uom}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
