import { CardProps } from "@/types";
import React from "react";

const CrateCard = ({ icon, title, value, uom }: CardProps) => {
  return (
    <div className='w-full h-fit bg-gray-300 rounded-xl flex p-8 flex-col gap-5'>
      {/* Header */}
      <div className='w-full flex justify-between items-center'>
        <div className='flex text-gray-500 gap-4 items-center px-2'>
          <div className=''>{icon}</div>
          <div className='text-2xl font-medium'>{title}</div>
        </div>
        <div>
          <div className='text-6xl font-semibold flex'>
            {value} <span className='self-end mb-1 ml-2 text-lg'>{uom}</span>
          </div>
        </div>
      </div>
      {/* Child */}
      <div className='grid gap-2 bg-white px-4 py-2 rounded-md divide-y'>
        <div className='w-full leading-none flex justify-center'>
          Ukuran Besar
        </div>
        <div className='w-full grid grid-flow-col divide-x center'>
          <div className='text-sm grid font-semibold pl-3 py-1'>
            Kuning{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Biru <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Merah{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hijau{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hitam{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
        </div>
      </div>
      <div className='grid gap-2 bg-white px-4 py-2 rounded-md divide-y'>
        <div className='w-full leading-none flex justify-center'>
          Ukuran Sedang
        </div>
        <div className='w-full grid grid-flow-col divide-x center'>
          <div className='text-sm grid font-semibold pl-3 py-1'>
            Kuning{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Biru <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Merah{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hijau{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hitam{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
        </div>
      </div>
      <div className='grid gap-2 bg-white px-4 py-2 rounded-md divide-y'>
        <div className='w-full leading-none flex justify-center'>
          Ukuran Kecil
        </div>
        <div className='w-full grid grid-flow-col divide-x center'>
          <div className='text-sm grid font-semibold pl-3 py-1'>
            Kuning{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Biru <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Merah{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hijau{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
          <div className='text-sm font-semibold grid pl-3 py-1'>
            Hitam{" "}
            <span className='text-xs font-light'>{value + " " + uom}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrateCard;
