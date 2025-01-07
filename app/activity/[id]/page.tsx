import PICDetail from "@/components/pages/PICDetail";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <div>
      <PICDetail id={id} />
    </div>
  );
};

export default page;
