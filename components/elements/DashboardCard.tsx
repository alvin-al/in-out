import { CardProps } from "@/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const DashboardCard = ({
  icon,
  title,
  value,
  uom,
  className,
  link,
}: CardProps) => {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <div
            className={`${className} w-full min-h-48 rounded-xl flex p-4 flex-col flex-wrap`}
          >
            <div className='flex gap-2 flex-col'>
              <div className='ml-1'>{icon}</div>
              <div className='text-lg font-medium'>{title}</div>
            </div>
            <div className='flex justify-between items-end'>
              <div className='text-6xl font-semibold flex'>
                {value || "0"}{" "}
                <span className='self-end mb-1 ml-2 text-lg'>{uom}</span>
              </div>
              <div>
                <IoIosArrowRoundForward size='3em' />
              </div>
            </div>
          </div>
        </Link>
      ) : (
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
      )}
    </div>
  );
};

export default DashboardCard;
