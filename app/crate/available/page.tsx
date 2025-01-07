import TopBar from "@/components/elements/TopBar";
import CrateDetail from "@/components/pages/CrateDetail";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title='Kerat Tersedia' />
      <CrateDetail />
    </div>
  );
};

export default page;
