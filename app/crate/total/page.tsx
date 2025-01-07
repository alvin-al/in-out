import TopBar from "@/components/elements/TopBar";
import CrateDetail from "@/components/pages/CrateDetail";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title='Total Kerat' />
      <CrateDetail />
    </div>
  );
};

export default page;
