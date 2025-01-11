import TopBar from "@/components/elements/TopBar";
import CrateDetailAvailable from "@/components/pages/CrateDetailAvailable";
import React from "react";

const page = () => {
  return (
    <div className='bg-gray-300 h-svh'>
      <TopBar title='Kerat Tersedia' />
      <CrateDetailAvailable />
    </div>
  );
};

export default page;
