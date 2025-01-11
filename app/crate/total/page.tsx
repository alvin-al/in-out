import TopBar from "@/components/elements/TopBar";
import CrateDetail from "@/components/pages/CrateDetail";
import React from "react";

const page = () => {
  return (
    <div className=' bg-gray-300 h-svh'>
      <TopBar title='Total Kerat' />
      <CrateDetail />
    </div>
  );
};

export default page;
