"use client";
import { Crate } from "@/types";
import CrateCard from "../elements/CrateCard";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { FaBoxes } from "react-icons/fa";

export default function CrateDetail() {
  const [crateData, setCrateData] = useState<Crate[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("crate").select("*");
      setCrateData(data);
      return;
    };
    fetchData();
  }, []);

  console.log(crateData);

  return (
    <div className='flex w-full h-full flex-col p-6 gap-6'>
      <CrateCard
        value={crateData?.length}
        uom='Buah'
        title='Total kerat'
        icon={<FaBoxes size='2em' />}
      />
      <CrateCard
        value={crateData?.filter((crate) => crate.available === true).length}
        title='Kerat tersedia'
        icon={<FaBoxes size='2em' />}
        uom='Buah'
      />
    </div>
  );
}
