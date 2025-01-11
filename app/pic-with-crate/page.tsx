import TopBar from "@/components/elements/TopBar";
import PICWithCrate from "@/components/pages/PICWithCrate";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBar title='PIC yang Membawa Kerat' />
      <PICWithCrate />
    </div>
  );
};

export default page;
