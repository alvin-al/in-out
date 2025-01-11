"use client";
import { Crate } from "@/types";
import CrateCard from "../elements/CrateCard";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { FaBoxes } from "react-icons/fa";

export default function CrateDetailAvailable() {
  const [crateData, setCrateData] = useState<Crate[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("crate")
        .select("*")
        .eq("available", true);
      setCrateData(data);
      return;
    };
    fetchData();
  }, []);

  return (
    <div className='flex w-full h-full flex-col gap-6 bg-white'>
      <CrateCard
        crateData={crateData}
        uom='Buah'
        title='Total kerat'
        icon={<FaBoxes size='2em' />}
        link='/crate/total'
      />
    </div>
  );
}
