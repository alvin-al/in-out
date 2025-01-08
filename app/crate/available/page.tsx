import TopBar from "@/components/elements/TopBar";
import CrateDetailAvailable from "@/components/pages/CrateDetailAvailable";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title='Kerat Tersedia' />
      <CrateDetailAvailable />
    </div>
  );
};

export default page;
