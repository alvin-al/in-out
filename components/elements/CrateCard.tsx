import { CardProps } from "@/types";
import React from "react";

const CrateCard = ({ icon, title, uom, crateData }: CardProps) => {
  const filteredCrateData = (size: string, color: string) => {
    return (
      crateData?.filter(
        (crate) =>
          (color === "" || crate.color === color) &&
          (size === "" || crate.size === size)
      ).length || 0
    );
  };

  const colors = ["Kuning", "Biru", "Merah", "Hijau", "Hitam"];
  const sizes = ["Besar", "Sedang", "Kecil"];

  return (
    <div className='w-full h-fit flex p-8 flex-col gap-5'>
      {/* Header */}
      <div className='w-full flex justify-between items-center'>
        <div className='flex text-[#20631e] gap-4 items-center px-2'>
          <div>{icon}</div>
          <div className='text-2xl font-medium'>{title}</div>
        </div>
        <div>
          <div className='text-4xl text-[#20631e] font-semibold flex'>
            {crateData?.length || "0"}
            <span className='self-end mb-1 ml-2 text-lg'>{uom}</span>
          </div>
        </div>
      </div>

      {/* Grid Sections */}
      {sizes.map((size) => (
        <div
          key={size}
          className='grid gap-2 bg-[#20631e] text-white px-4 py-2 rounded-md divide-y'
        >
          <div className='leading-none flex justify-center'>Ukuran {size}</div>
          <div className='text-center w-full grid grid-flow-col divide-x py-1'>
            {colors.map((color) => (
              <div key={color} className='text-sm grid font-light'>
                {color}{" "}
                <span className='font-semibold text-lg'>
                  {filteredCrateData(size, color)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrateCard;
